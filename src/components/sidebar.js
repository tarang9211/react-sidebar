import React, { Component } from 'react';
import Sidebar_component from './elements';
import ToggleHeader from './toggleheader'

class Sidebar extends Component {

  constructor(props){
    super(props)
    this.handler = this.handler.bind(this)
    this.state = { toggle: true }
  }

  handler(e){
    e.preventDefault()
    this.setState({ toggle : !this.state.toggle})
    console.log(this.state.toggle)
    console.log(e)
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <div className="top-sidebar"></div>
          <ToggleHeader handler={this.handler} check={this.state.toggle}/>
        </div>
        <div className="sidebar-content">
          <Sidebar_component testarray={['1','2','3','4','5','6','7','8','9','10']} />
        </div>
      </div>
    );
  }

}

export default Sidebar;
