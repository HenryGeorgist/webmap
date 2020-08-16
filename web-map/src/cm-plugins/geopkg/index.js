import getBundle from './cm-geopkg-bundle';

const cmGeoPkgPlugin=function getPlugin(){
  return(
    {
      pluginName: 'GeoPackage Plugin',
      enabled: true,
      bundle: getBundle(),
      components:[]
    }
  )
}

export {cmGeoPkgPlugin as default}