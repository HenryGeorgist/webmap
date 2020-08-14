import React from 'react';
import { connect } from 'redux-bundler-react';
import mapper from '../../resources/Globe_Full_SVG_NoOcean_Abstract.svg';
class Banner extends React.Component{
    render(){
        return (
            <nav className="navbar navbar=expand-lg navbar-dark bg-dark">
                <div className="float-left">
                    <a href = "/"><img src={mapper} alt="USACE LOGO" style={{width:'45px'}}/></a>
                    <a className="navbar-brand" href="/" style={{paddingLeft:"15px"}}><b>Web Map</b></a>           
                </div>
            </nav>
        )
    }
}
export default connect(
    Banner
);