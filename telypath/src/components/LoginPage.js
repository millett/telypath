import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from  '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class ReportView extends React.Component {

  render() {

    const loginForm = (
      <div>
        <h1> Log in </h1>
        <TextField
             hint="Enter your Username"
             label="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
       />
         <br/>
       <TextField
         type="password"
         label="Password"
         onChange = {(event,newValue) => this.setState({password:newValue})}
         />
         <br/>

         <br/>
         <br/>
         <Button variant="contained" component={Link} to="/home">
          Log in
        </Button>
       </div>
    );

    return (
      <Paper>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          {loginForm}
        </Grid>

      </Grid>
      </Paper>
    );
  }
}
export default ReportView;
