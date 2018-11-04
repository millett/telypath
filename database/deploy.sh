#!/bin/bash

set -e

(cd telypath_api; sqitch deploy --target=db:pg://postgres:postgres@localhost:5016/telypath?sslmode=disable)

