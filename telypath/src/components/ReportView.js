import React, { Component } from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'
import IconButton from '@material-ui/core/IconButton'
import Mail from '@material-ui/icons/Mail'
import TextField from '@material-ui/core/TextField'

class ReportView extends React.Component {

  render() {
    const arr = window.location.href.split('id=')
    const patientId = arr[arr.length - 1]
    const defaultFillText="Dear Dr. Millett,\n\n"+
    "Attached please find my Digital Pathology Consult.\n"+
    "Gross summary:\n"+
    `Patient ${patientId} was found to have multiple multinucleated cells (see Page 2 for microscopic details)\n`+
    "And shows classic signs of sleep deprivation-related cancer (see Page 1 for clinical history)"+
    "\n\nBest,\nDr. Bonham\nMD, FCAP"
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6}>
          {/* <h1 style={{justifyContent:"center"}}>Final Generated Report</h1> */}
          <Iframe url="https://a.uguu.se/ETeYiHeRULM4_tcga2.pdf"
            id="lazyIdframe"
            display="initial"
            position="relative"
            height="100vh"
            style={{marginTop: "-20px !important"}}
          />
        </Grid>
        <Grid item xs={6}>
          <h2> To: Dr. Millett, MD/MS </h2>
          <h2> Subject: Telypath Report: {patientId}</h2>
          <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Message text"
            multiline
            defaultValue={defaultFillText}
            margin="normal"
            variant="outlined"
            style={{width: "45vw"}}
          />
        </div>
          <IconButton
            style={{backgroundColor:"blue", color:"white", borderRadius: 0.8, align:"right", float:"right", marginRight: "5vw"}}
            href={"mailto: mattmillett314@gmail.com"}>
            Send to ordering physician <Mail />
          </IconButton>;
        </Grid>
      </Grid>
      </div>
    );
  }
}
export default ReportView;
