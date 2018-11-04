import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'

class CaseTable extends React.Component {
  render() {
    const patientInfos =  [
      {
        "id": "78193b6c-c90a-4812-82bc-80990b3df196",
        "status": "CaseStatus.New",
        "source": "UPMC",
        "tissue_location": "Prostate",
        "diagnosis": null
      },
      {
        "id": "6a66fe3a-b52d-4221-9e25-4316ebafd515",
        "status": "CaseStatus.InProgress",
        "source": "SUMC",
        "tissue_location": "Breast",
        "diagnosis": null
      },
      {
        "id": "a7d181c4-4af9-4fa9-bcc7-653e37a16ec6",
        "status": "CaseStatus.SignedOut",
        "source": "BCH",
        "tissue_location": "Breast",
        "diagnosis": null
      }
    ]

    const getColorAndStatusFromEnum = (status) => {
      switch (status) {
        case "CaseStatus.New":
          return {statusText: "New", color: "plum"}
        case "CaseStatus.InProgress":
          return {statusText: "In Progress", color: "PaleGoldenRod"}
        case "CaseStatus.SignedOut":
          return {statusText: "Signed Out", color: "PaleGreen"}
        default:
          return status
      }

    }

    return (
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography style={{fontWeight: "bold"}}>
                    Patient ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography style={{fontWeight: "bold"}}>
                    Status
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography style={{fontWeight: "bold"}}>
                    Source
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography style={{fontWeight: "bold"}}>
                    Tissue Location
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography style={{fontWeight: "bold"}}>
                    Diagnosis (if available)
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patientInfos.map(patientInfo =>{
                console.log(patientInfo)
                const obj = getColorAndStatusFromEnum(patientInfo.status)

                return (
                  <TableRow key={patientInfo.id} style={{background: obj.color}}>
                    <TableCell>
                      <Typography>
                        {patientInfo.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {obj.statusText}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {patientInfo.source}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {patientInfo.tissue_location}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {patientInfo.diagnosis}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )
              })
            }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default CaseTable;