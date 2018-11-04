.PHONY: tables rabbit-mq

tables:
	sqlacodegen postgresql://postgres:postgres@localhost:5016/telypath --schema telypath > telypath_api/entities/tables.py

rabbit-mq:
	docker run -p 5672:5672 --hostname my-rabbit rabbitmq:3
