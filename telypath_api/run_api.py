import argparse

from sqlalchemy.engine import create_engine

from apiserver.ApiServer import ApiServer
from redox.RedoxAdapter import RedoxAdapter


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-m", "--hostname", required=True)
    parser.add_argument("-p", "--port", required=True)
    return parser.parse_args()


def main():
    redox = RedoxAdapter(
        api_key="e54448d2-dbbf-473b-9ef7-9346e7da1ac8",
        secret="XccMKvfu70WV8XGV45XqXDJmgN5kM0FFjo6P7eKoHAumVDx670WDKwTveIMQ2lxNZUsqKdR7")
    engine = create_engine("postgres://postgres:postgres@localhost:5016/telypath")
    api_server = ApiServer(pg_engine=engine, redox_adapter=redox, host=args.hostname, port=args.port)
    api_server.run()


if __name__ == '__main__':
    try:
        args = parse_args()
        main()
    except KeyboardInterrupt:
        print("exiting")
        exit(0)
