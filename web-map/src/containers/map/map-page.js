import React from 'react';
import { connect } from 'redux-bundler-react';
import {
  Map,
  addData,
  basemapSwitcher,
  bookmarks,
  coordDisplay,
  draw,
  treeView,
  geocoder,
  identify,
  measureTools,
  rotateNorth,
  zoomInOut,
  zoomHome,
  zoomToBox
} from "@corpsmap/corpsmap";
import "@corpsmap/corpsmap/css/corpsmap.css";
import gpg from '../../cm-plugins/geopkg/index'
class MapPage extends React.Component {
  render(){
    return (
        <div className="container-fluid" style={{ padding: "0" }}>
            <Map
              theme="grey"
              plugins={[
                addData,
                basemapSwitcher,
                bookmarks,
                coordDisplay,
                draw,
                treeView(),
                geocoder,
                identify,
                measureTools,
                rotateNorth,
                zoomInOut,
                zoomHome,
                zoomToBox,
                gpg
              ]}
            />        
        </div>
    )
  }
}
export default connect(
  MapPage
  );