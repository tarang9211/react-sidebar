import React, { Component } from 'react';
import Sidebar from './sidebar';

const App = () => {
  return (
    <div className="row">
      <div className="col-4">
        <Sidebar />
      </div>
      <div className="col-12">
      </div>
    </div>
  );
};

export default App;
