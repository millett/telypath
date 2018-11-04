import React, { Component } from 'react';
import { Document } from 'react-pdf/dist/entry.webpack';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe'
import IconButton from '@material-ui/core/IconButton'
import Mail from '@material-ui/icons/Mail'

class ReportView extends React.Component {

  render() {
    const arr = window.location.href.split('id=')
    const patientId = arr[arr.length - 1]
    return (
      <div>
        <h1 style={{justifyContent:"center"}}>Final Generated Report</h1>
        <Iframe url="https://fenix.tecnico.ulisboa.pt/downloadFile/3779578361014/g_and_m_programming_for_mills_manual.pdf"
          id="lazyIdframe"
          display="initial"
          position="relative"
          height="65vh"
        />
      </div>
    );
  }
}
export default ReportView;
