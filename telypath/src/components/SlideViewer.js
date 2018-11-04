import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Iframe from 'react-iframe'
class SlideViewer extends React.Component {

  render() {
    return (
      <Iframe url="http://cancer.digitalslidearchive.net/"
        id="lazyIframe"
        display="initial"
        position="relative"
        height="65vh"
      />
    )
  }

}
export default SlideViewer;
