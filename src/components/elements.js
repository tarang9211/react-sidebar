import React, { Component } from 'react';

class Sidebar_component extends Component{

  render() {
    return(
      <div>
        {this.props.testarray.map((test, i)=>{
          return <div className={"test test"+i} key={i}>{test}</div>
        })}
      </div>
    );
  }
}

export default Sidebar_component;
