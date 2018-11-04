-- Deploy telypath:0001-case-models to pg

BEGIN;

create table telypath.cases(
  id uuid not null,
  status text not null,
  source text not null,
  tissue_location text not null
);

COMMIT;
