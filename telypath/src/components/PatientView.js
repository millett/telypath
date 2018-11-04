import React, { Component } from 'react';
import SlideViewer from "./SlideViewer"
import {Map} from 'react-leaflet'
class PatientView extends React.Component {
  render() {
    return (
      <div>
        Potatoes
        <div>
           <SlideViewer />
          {/* <SlideViewer id="leaflet-id" style={{height:500, width:500}}/> */}
        </div>
      </div>
    );
  }
}
export default PatientView;


/*

<div id="openseadragon1" class="card" style="width: 800px; height: 800px; margin: auto">
   <div class="title">Not Proscia</div>
   <script src="{{ url_for('static', filename='scripts/openseadragon.js') }}"></script>
   <script type="text/javascript" >
   console.log("viewer?");
   var viewer = new OpenSeadragon({
     id: "openseadragon1",
     {#prefixUrl: "images/",#}
     tileSources: {
       Image: {
         xmlns: "http://schemas.microsoft.com/deepzoom/2008",
         Format: "png",
         Overlap: "2",
         Url: "https://storage.googleapis.com/art-driver-test/dp200_files/",
         TileSize: "254",
         Size: {
           Height: "52480",
           Width: "40960"
         }
       }
     }
   });
  viewer.addHandler("open", function() {
   var getTileUrl = viewer.source.getTileUrl;
   console.log(getTileUrl());
   viewer.source.getTileUrl = function() {
     return getTileUrl.apply(this, arguments);
   };
 });
</script>
</div>
*/
