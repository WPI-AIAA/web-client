import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';

class App extends Component {

  constructor() {
    super();
    // Handle any DB Initialization
  }

  render() {

    // Place Holder
    return (
      <div className="App">
        <Navbar />
        <Login />
      </div>
    );

  }

}

export default App;
