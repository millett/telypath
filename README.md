# telypath
Digital pathology of the future

## Local Development

### Start postgres
* Requires Docker
```bash
cd database
./run-pg.sh  # runs postgres in docker
# run migtation
psql -h localhost -p 5016 -d telypath -U postgres -f telypath_api/deploy/0001-case-models.sql
# add insert data
psql -h localhost -p 5016 -d telypath -U postgres -f telypath_api/inserts.sql
```

### Make conda environment
```bash
cd ../ # or go to root dir
conda env create -f environment.yaml
source activate telypath
```

### Run server
```bash
python telypath_api/run_api.py -m localhost -p 8080
```
