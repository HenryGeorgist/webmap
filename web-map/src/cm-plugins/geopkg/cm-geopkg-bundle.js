import v4 from "uuid";
const GEOPKG_INITALIZE_START='GEOPKG_INITALIZE_START';
const GEOPKG_INITALIZE_END='GEOPKG_INITALIZE_END';
const MAP_INITIALIZED='MAP_INITIALIZED';

export default {
    name:'geopkg',
    getReducer() {
      const initialData = {
        _shouldInitialize: false,
      };
      return (state = initialData, { type, payload }) => {
        switch(type){
          case GEOPKG_INITALIZE_START:
          case GEOPKG_INITALIZE_END:
            return Object.assign({}, state, payload);
          case MAP_INITIALIZED:
            return Object.assign({}, state, {
              _shouldInitialize: true
            })
          default:
            return state;
        }
      }
    },
    doGeoPkgInitialize: () => ({ dispatch, store, anonGet }) => {
      dispatch({
        type: GEOPKG_INITALIZE_START,
        payload: {
          _shouldInitialize: false,
        }
      })
      initMap(store);      
    },
    reactAepShouldInitialize: (state) => {
      if(state.geopkg._shouldInitialize) return { actionCreator: "doGeoPkgInitialize" };
    }
}
const initMap=function(store){
  const map = store.selectMap();
  console.log(map)

  const lyr = null //create a layer and assign your geopackage stuff or create many layers if the file has many layers 

  const parentUid = store.selectTreeViewRootId();
  const uid = v4();
  //the doAddLayer menthod might need some changes depending on your usage.
  store.doAddLayer({
    uid: uid,
    displayName: 'Local GeoPackage',
    parentUid: parentUid,
    mapLayer: lyr,
    serviceType: "LocalGeoPackage",
    visible: true,
    zoomTo: false,
  });
}