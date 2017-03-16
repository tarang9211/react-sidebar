import React, { Component } from 'react';
import Sidebar_component from './elements';

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <h4>Header</h4>
        </div>
        <div className="sidebar-content">
          <Sidebar_component testarray={['1','2','3','4','5','6','7','8','9','10']} />
        </div>
      </div>
    );
  }

}

export default Sidebar;
