import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Iframe from 'react-iframe'
class SlideViewer extends React.Component {

  render() {
    const position = [51.505, -0.09]
    return (
      <Iframe url="http://cancer.digitalslidearchive.net/"
        id="lazyIframe"
        display="initial"
        position="relative"

      />
    )
  }

}
export default SlideViewer;
