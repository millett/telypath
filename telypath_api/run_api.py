import argparse

from sqlalchemy.engine import create_engine

from apiserver.ApiServer import ApiServer


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-m", "--hostname", required=True)
    parser.add_argument("-p", "--port", required=True)
    return parser.parse_args()


def main():
    engine = create_engine("postgres://postgres:postgres@localhost:5016/telypath")
    api_server = ApiServer(pg_engine=engine, host=args.hostname, port=args.port)
    api_server.run()


if __name__ == '__main__':
    try:
        args = parse_args()
        main()
    except KeyboardInterrupt:
        print("exiting")
        exit(0)
