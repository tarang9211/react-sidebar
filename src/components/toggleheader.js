import React, { Component } from 'react';

class ToggleHeader extends Component{

  render(){

    const bg = this.props.check === true ? 'bgred' : 'bgwhite'
    const bg2 = this.props.check === true ? 'bhwhite' : 'bgred'

    return(
      <div className="togglewrapper">
        <div className="togglelogo"></div>
        <div className = "toggleapps">
          <button className="toggleappsbutton" onClick = {this.props.handler}>Apps</button>
          <div className={bg}></div>
        </div>
        <div className="toggleservice">
          <button className="toggleservicebutton" onClick = {this.props.handler}>Services</button>
          <div className = {bg2}></div>
        </div>
        </div>
    );
  }
}


export default ToggleHeader;
