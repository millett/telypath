import React, { Component } from 'react';
import OpenSeadragon from 'openseadragon';

const id = 'ocd-viewer';
const type = 'legacy-image-pyramid';
class SlideViewer extends React.Component {
  componentDidMount() {
    // init seadragon
    // https://github.com/openseadragon/openseadragon/issues/942
    let self = this
    let { id, image, type } = this.props;

    // helper function to load image using promises
    const loadImage = src => new Promise(function(resolve, reject) {
      var img = document.createElement('img')
      img.addEventListener('load', function(){  resolve(img) })
      img.addEventListener('error', function(err){ reject(404) })
      img.src = src;
    });

    loadImage(image).then(data =>{
        console.log(self)
        self.viewer = OpenSeadragon({
            id: id,
            visibilityRatio: 1.0,
            constrainDuringPan: false,
            defaultZoomLevel: 1,
            minZoomLevel: 1,
            maxZoomLevel: 10,
            // zoomInButton: 'zoom-in',
            // zoomOutButton: 'zoom-out',
            // homeButton: 'reset',
            // fullPageButton: 'full-page',
            // nextButton: 'next',
            // previousButton: 'previous',
            // showNavigator: true,
            // navigatorId: 'navigator',
            tileSources: {
                type:type,
                levels:[ { url: image, height:data.naturalHeight, width: data.naturalWidth } ]
            }
        })

    });
  }

  render() {
      let self = this;
      return (
          <div className="ocd-div" ref={node => {this.el = node;}}>
              <div className="navigator-wrapper c-shadow">
                  <div id="navigator"></div>
              </div>
              <div className="openseadragon" id={id}></div>
              <ul className="ocd-toolbar">
                  <li><a id="zoom-in"><i className="fa fa-plus"></i></a></li>
                  <li><a id="reset"><i className="fa fa-circle"></i></a></li>
                  <li><a id="zoom-out"><i className="fa fa-minus"></i></a></li>
                  <li><a id="full-page"><i className="fa fa-cog"></i></a></li>
              </ul>
          </div>
      )
  }
}
export default SlideViewer;