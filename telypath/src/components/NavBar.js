import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Assignment from '@material-ui/icons/Assignment'
import Mail from '@material-ui/icons/Mail'

import { Link } from 'react-router-dom'
const NavBar = () => {

  const onPatientView = window.location.href.includes('patient')
  const onReportView = window.location.href.includes('report')
  let backButton = <IconButton />;
  let currentPatientId = null;
  if (onPatientView || onReportView) {
    const arr = window.location.href.split("?id=");
    currentPatientId = arr[1];
  }
  let backButtonLink = onPatientView ? "/home" : `/patientView?id=${currentPatientId}`
  if (onPatientView || onReportView) backButton= (
     <IconButton color="inherit" component={Link} to={backButtonLink}>
        <ArrowBack />
      </IconButton>
    );

  const nextButtonStyle = {
    textAlign:"right",
    float:"right",
    color:"white",
    marginRight: "2vw"
  };

  let patientInfo = (
    <span style={{color:"white", align:"center", fontSize: "20px", fontWeight: "bold", marginLeft: "20vw", marginRight: "20vw", whiteSpace: "nowrap"}}>
      {currentPatientId
        ? `Patient ID: ${currentPatientId}`
        : "Choose a Patient"
      }
    </span>
  )

  let nextButton = onPatientView
    ? (
      <IconButton
        style={nextButtonStyle}
        component={Link} to={`/reportView?id=${currentPatientId}`}
        >
        Generate PDF report
        <Assignment />
      </IconButton>
    )
    : null;

  return(
      <div>
      <AppBar position="fixed" style={{backgroundColor: "purple"}}>
        <Toolbar>
          {backButton}
          <Typography variant="title" color="inherit">
            Telypath
          </Typography>
          <Typography>
            {patientInfo}
          </Typography>
          {nextButton}
        </Toolbar>
      </AppBar>
      </div>
  )
}
export default NavBar;
