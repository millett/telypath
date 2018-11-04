from collections import namedtuple
from enum import Enum


class CaseStatus(Enum):
    New = 1
    InProgress = 2
    SignedOut = 3


class PatientCase(namedtuple("PatientCase",
                             ["id",
                              "first_name",
                              "last_name",
                              "dob",
                              "gender",
                              "status",
                              "source",
                              "tissue_location",
                              "clinical_notes",
                              "clinical_summary",
                              "thumbnail"])):
    @classmethod
    def from_proxy(cls, row_proxy, demographics):
        print(f"row proxy: {row_proxy}")
        print(f"demographics: {demographics}")
        return cls(id=row_proxy[0],
                   first_name=demographics.get("FirstName", None),
                   last_name=demographics.get("LastName", None),
                   dob=demographics.get("DOB", None),
                   gender=demographics.get("Sex", None),
                   status=row_proxy[1],
                   source=row_proxy[2],
                   tissue_location=row_proxy[3],
                   clinical_notes=row_proxy[6],
                   clinical_summary=row_proxy[7],
                   thumbnail=row_proxy[9])

    @classmethod
    def from_row(cls, case_row, demographics):
        return cls(id=case_row.__dict__["id"],
                   first_name=demographics.get("FirstName", None),
                   last_name=demographics.get("LastName", None),
                   dob=demographics.get("DOB", None),
                   gender=demographics.get("Sex", None),
                   status=case_row.__dict__["status"],
                   source=case_row.__dict__["source"],
                   tissue_location=case_row.__dict__["tissue_location"],
                   clinical_notes=case_row.__dict__["clinical_notes"],
                   clinical_summary=case_row.__dict__["clinical_summary"],
                   thumbnail=case_row.__dict__["encoded_thumbnail"])


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
