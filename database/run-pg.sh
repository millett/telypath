#!/bin/bash

echo "Starting Database PostgreSQL Docker container..."
pg_container=$(docker run -it -d -p 5016:5432 -e POSTGRES_USER=postgres -e POSTGRES_DB=telypath -e POSTGRES_PASSWORD=postgres postgres)
echo "Started Database PostgreSQL with container id $pg_container"
echo
