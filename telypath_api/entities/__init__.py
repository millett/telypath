from collections import namedtuple
from enum import Enum


class CaseStatus(Enum):
    New = 1
    InProgress = 2
    SignedOut = 3


class PatientCase(namedtuple("PatientCase",
                             ["id",
                              "status",
                              "source",
                              "tissue_location",
                              "diagnosis",
                              "thumbnail"])):
    @classmethod
    def from_proxy(cls, row_proxy):
        return cls(id=row_proxy[0],
                   status=row_proxy[1],
                   source=row_proxy[2],
                   tissue_location=row_proxy[3],
                   diagnosis=row_proxy[4],
                   thumbnail=row_proxy[6])

    @classmethod
    def from_row(cls, case_row):
        return cls(case_row.__dict__["id"],
                   case_row.__dict__["status"],
                   case_row.__dict__["source"],
                   case_row.__dict__["tissue_location"],
                   case_row.__dict__["diagnosis"],
                   case_row.__dict__["encoded_thumbnail"])


class DeepZoomParameters(namedtuple("DeepZoomParameters",
                                    ["format",
                                     "overlap",
                                     "url",
                                     "tile_size",
                                     "height",
                                     "width"])):
    @classmethod
    def from_row(cls, slide_row):
        return cls(slide_row.__dict__["format"],
                   slide_row.__dict__["overlap"],
                   slide_row.__dict__["url"],
                   slide_row.__dict__["tile_size"],
                   slide_row.__dict__["height"],
                   slide_row.__dict__["width"])
