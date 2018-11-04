import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CaseTable extends React.Component {
  render() {
    const getClassAndStatusFromEnum = (status) => {
      switch (status) {
        case "CaseStatus.New":
          return {statusText: "New", className: "newCaseRow"}
        case "CaseStatus.InProgress":
          return {statusText: "In Progress", className: "inProgressCaseRow"}
        case "CaseStatus.SignedOut":
          return {statusText: "Signed Out", className: "signedOutCaseRow"}
        default:
          return status
      }
    }

    console.log(this.state)
    console.log(this.props)

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
            <TableBody className="btn">
              {this.props.simpleReducer.patientInfos.map(patientInfo =>{
                const obj = getClassAndStatusFromEnum(patientInfo.status)
                return (
                    <TableRow key={patientInfo.id} className={obj.className} component={Link} to={`/patientView?id=${patientInfo.id}`}>
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

const mapStateToProps = state => ({
   ...state
})

export default connect(mapStateToProps)(CaseTable);
