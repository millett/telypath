import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Assignment from '@material-ui/icons/Assignment'
import { Link } from 'react-router-dom'
const NavBar = () => {

  const onPatientView = !window.location.href.includes('patient')

  const backButton = onPatientView
    ? <IconButton />
    : <IconButton color="inherit" component={Link} to={"/"}>
        <ArrowBack />
      </IconButton>

  const nextButton = onPatientView
    ? null
    : (
      <IconButton style={{textAlign:"right", float:"right", color:"white", marginLeft: "75vw"}}>
        Generate PDF report
        <Assignment />
      </IconButton>
    )
  return(
      <div>
      <AppBar position="fixed" style={{backgroundColor: "purple"}}>
        <Toolbar>
          {backButton}
          <Typography variant="title" color="inherit">
            Telypath
          </Typography>
          {nextButton}
        </Toolbar>
      </AppBar>
      </div>
  )
}
export default NavBar;
