# coding: utf-8
from sqlalchemy import Column, ForeignKey, Integer, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
metadata = Base.metadata


class SlideResource(Base):
    __tablename__ = 'slide_resources'
    __table_args__ = {'schema': 'telypath'}

    id = Column(UUID, primary_key=True)
    format = Column(Text, nullable=False)
    overlap = Column(Integer, nullable=False)
    url = Column(Text, nullable=False)
    tile_size = Column(Integer, nullable=False)
    height = Column(Integer, nullable=False)
    width = Column(Integer, nullable=False)


class Case(Base):
    __tablename__ = 'cases'
    __table_args__ = {'schema': 'telypath'}

    id = Column(UUID, primary_key=True)
    status = Column(Text, nullable=False)
    source = Column(Text, nullable=False)
    tissue_location = Column(Text, nullable=False)
    diagnosis = Column(Text)
    slide_resource_id = Column(ForeignKey('telypath.slide_resources.id'))
    encoded_thumbnail = Column(Text)

    slide_resource = relationship('SlideResource')
