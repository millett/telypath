-- Deploy telypath:0001-case-models to pg

BEGIN;

CREATE SCHEMA telypath;

alter default privileges in schema telypath grant all on tables to postgres;
grant all privileges on schema telypath to postgres;
grant all privileges on all tables in schema telypath to postgres;

create table telypath.slide_resources(
  id uuid primary key,
  format text not null,
  overlap integer not null,
  url text not null,
  tile_size integer not null,
  height integer not null,
  width integer not null
);

create table telypath.cases(
  id uuid not null primary key,
  status text not null,
  source text not null,
  tissue_location text not null,
  diagnosis text,
  slide_resource_id uuid references telypath.slide_resources(id),
  encoded_thumbnail text
);

COMMIT;
