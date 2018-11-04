import json

import requests


class RedoxAdapter:
    def __init__(self,
                 api_key,
                 secret,
                 query_url="https://api.redoxengine.com/query",
                 auth_url="https://api.redoxengine.com/auth/authenticate"):
        self.api_key = api_key
        self.secret = secret
        self.auth_url = auth_url
        self.query_url = query_url
        self.session_info = self.__get_session_token()

    def __get_session_token(self):
        response = requests.post(self.auth_url, data={"apiKey": self.api_key, "secret": self.secret})
        return response.json()

    def get_patient_info(self, external_id, external_id_type):
        print(f"Redox: getting patient info {external_id}/{external_id_type}")
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.session_info['accessToken']}"
        }
        data = {
            "Meta": {
                "DataModel": "Clinical Summary",
                "EventType": "PatientQuery",
                "EventDateTime": "2018-01-13T09:55:19.126Z",
                "Test": True,
                "Source": {
                    "ID": "074249ef-e851-4ce0-9a26-cbe94879536c",
                    "Name": "Cure Coin Source"
                },
                "Destinations": [
                    {
                        "ID": "4e871b10-3a2d-4944-816c-ed2e5e462e09",
                        "Name": "Athena Hackathon CCDA Destination (s)"
                    }
                ],
                "Message": {
                    "ID": 668527890
                },
                "Transmission": {
                    "ID": 511492255
                },
                "FacilityCode": None
            },
            "Patient": {
                "Identifiers": [
                    {
                        "ID": external_id,
                        "IDType": external_id_type
                    }
                ]
            },
            "Location": {
                "Department": "1"
            }
        }
        try:
            response = requests.post(self.query_url, headers=headers, data=json.dumps(data))
        except:
            response = None
            return response

        patient_query = response.json()
        print(f"patient query {patient_query['Meta'].keys()}")
        demographics = patient_query["Header"]["Patient"]["Demographics"]
        return demographics

