import React, { Component } from 'react';
import SlideViewer from "./SlideViewer"
import {Map} from 'react-leaflet'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
class PatientView extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>xs=2</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper>
            <SlideViewer />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
      </Grid>
        <h1>
          Patient id:
        </h1>
        <div>
          {/* <SlideViewer id="leaflet-id" style={{height:500, width:500}}/> */}
        </div>
      </div>
    );
  }
}
export default PatientView;
