import React, { Component } from 'react';
import SlideViewer from "./SlideViewer"
import {Map} from 'react-leaflet'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
class PatientView extends React.Component {
  render() {
    const arr = window.location.href.split('id=')
    const patientId = arr[arr.length - 1]
    const clinicalHistory = "Five months prior to the current hospital admission, patient began chemotherapy treatments every 3 weeks which included fludarabine and other chemotherapy drugs.One month prior to hospital admission, “everything turned around;” patient experienced a decline in  her  dyspnea, her lung mass saw a more significant reduction in size, and she no longer required thoracentesis."

    return (
      <div style={{padding: "10px"}}>
        <Grid container spacing={24}>
        <Grid item xs={2}>
          <Paper>
            <h3 style={{textAlign:"center"}}>
              Patient Info
            </h3>
            <List>
              <ListItem style={{margin:"0px", padding: "0px"}}>
                <h4>Age:</h4> 65
              </ListItem>
              <ListItem style={{margin:"0px", padding: "0px"}}>
                <h4>Gender:</h4> Female
              </ListItem>
              <ListItem style={{margin:"0px", padding: "0px"}}>
                <h4>Clinical History:</h4>
              </ListItem>
              <ListItem style={{margin:"0px", padding: "0px"}}>
                {clinicalHistory}
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper>
            <SlideViewer />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper>
            <h3 style={{textAlign:"center"}}>Slide info</h3>
            <List>
              <ListItem>
                <h4>Country:</h4> China
                </ListItem>
                <ListItem>
                <h4>Source:</h4> SUMC
              </ListItem>
              <ListItem>
                <h4>Diagnosis:</h4><TextField multiline/>
              </ListItem>
              <ListItem>
              <div>
                <h3 style={{marginBottom: 0, textAlign: "center"}}>Other Observations</h3>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Macroscopic"
                  multiline
                  margin="normal"
                  variant="outlined"
                />
                <span style={{width:"4%"}}>&nbsp;</span>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Microscopic"
                  multiline
                  margin="normal"
                  variant="outlined"
                />
                <br/><br/><br/><br/>
              </div>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <h3 style={{textAlign: "center", marginBottom: "0px"}}> Clinical Notes </h3>
            <TextField
              id="outlined-multiline-flexible"
              label="Clinical Notes"
              multiline
              margin="normal"
              variant="outlined"
              style={{"width": "90%", marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <h3 style={{color:"green", textAlign: "center"}}>Clinical Summary</h3>
            <div>
              <TextField
                label="Summary"
                multiline
                margin="small"
                variant="outlined"
                style={{"width": "90%", marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
          <h3 style={{textAlign: "center"}}>Other Observations</h3>
          <div>
            <TextField
              label="Other"
              multiline
              margin="small"
              variant="outlined"
              style={{"width": "90%", marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}
            />
          </div>
          </Paper>
        </Grid>
      </Grid>
      <Button style={{"background":"green", color:"white", width:"50%", float:"middle", marginLeft:"25%", marginTop: "10px",}}>
      Save
      </Button>
      </div>
    );
  }
}
export default PatientView;
