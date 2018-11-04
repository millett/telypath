import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const backButton = !window.location.href.includes('patient')
    ? <IconButton />
    : <IconButton color="inherit" component={Link} to={"/"}>
        <ArrowBack />
      </IconButton>
  return(
      <div>
      <AppBar position="fixed" style={{backgroundColor: "purple"}}>
        <Toolbar>
          {backButton}
          <Typography variant="title" color="inherit">
            Telypath
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
  )
}
export default NavBar;
