import json

from flask import Flask, Response, request
from sqlalchemy.orm import sessionmaker

from entities import PatientCase, DeepZoomParameters
from entities.tables import Case as CaseTable
from entities.tables import SlideResource as SlideTable


class ApiServer:
    def __init__(self, pg_engine, redox_adapter, host="0.0.0.0", port=8080):
        self.host = host
        self.port = port
        self.db = pg_engine
        self.redox = redox_adapter
        self.app = Flask(__name__, instance_relative_config=True)

    def run(self):
        self.routes()
        self.app.run(host=self.host, port=self.port, debug=True, use_reloader=False)

    @staticmethod
    def __get_session(connection):
        Session = sessionmaker(bind=connection)
        return Session()

    def routes(self):
        @self.app.route("/api/v1/cases", methods=["GET"])
        def cases_route():
            with self.db.connect() as conn:
                session = self.__get_session(conn)
                case_query = session.query(CaseTable)
                slide_resources_query = session.query(SlideTable)
                cases_result = session.execute(case_query)
                slide_result = session.execute(slide_resources_query)
                rows = [PatientCase.from_proxy(row, {}) for row in cases_result]
            response_dict = {"patient_cases": [p._asdict() for p in rows], "slides": [dict(s) for s in slide_result]}
            response = Response(response=json.dumps(response_dict), status=200)
            return response

        @self.app.route("/api/v1/cases/<string:case_uuid>", methods=["GET"])
        def case_detail_route(case_uuid):
            with self.db.connect() as conn:
                session = self.__get_session(conn)
                case = session.query(CaseTable).filter(CaseTable.id == case_uuid).first()
                if case is None:
                    return Response("Not Found", status=400)
                slide_resource = session.query(SlideTable).filter(SlideTable.id == case.id).first()
                if slide_resource is not None:
                    deepzoom_params = DeepZoomParameters.from_row(slide_resource)._asdict()
                else:
                    deepzoom_params = None

                print(f"external ID {str(case.__dict__['external_id'])}")
                print(f"external ID type {str(case.__dict__['external_id'])}")

                demographics = self.redox.get_patient_info(str(case.__dict__["external_id"]), str(case.__dict__["external_id_type"]))
                patient_case = PatientCase.from_row(case, demographics)
            response_dict = {"patient_case": patient_case._asdict(), "deepzoom_parameters": deepzoom_params}
            return Response(response=json.dumps(response_dict), status=200, content_type="application/json")

        @self.app.route("/api/v1/cases/<string:case_uuid>/diagnosis", methods=["POST"])
        def add_diagnosis_route(case_uuid):
            print("add diagnosis route")
            content_type_header = next(h[1] for h in request.headers if h[0] == "Content-Type")
            if content_type_header != "application/json":
                return Response("Bad Request, expects json", status=404)
            if "diagnosis" not in request.json:
                return Response("requires 'diagnosis' field", status=400)
            with self.db.connect() as conn:
                session = self.__get_session(conn)
                case = session.query(CaseTable).filter(CaseTable.id == case_uuid).first()
                if case is None:
                    return Response("Not Found", status=400)
                case.diagnosis = request.json["diagnosis"]
                session.commit()
            return "ok", 201
