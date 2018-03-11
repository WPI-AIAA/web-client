import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';

class App extends Component {

  constructor() {
    super();
    // Handle any DB Initialization

    this.state = {
      sourceURL: "http://ec2-13-58-80-79.us-east-2.compute.amazonaws.com:8080"
    }
  }

  render() {

    // Place Holder
    return (
      <div className="App">
        <Navbar />
        <Login sourceURL={this.state.sourceURL}/>
      </div>
    );

  }

}

export default App;
