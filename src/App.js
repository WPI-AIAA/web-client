import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import About from './components/about/About';
import Schedule from './components/schedule/Schedule';
import PageNotFound from './components/pagenotfound/PageNotFound';

class App extends Component {

  constructor(props) {
    super(props);
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

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route path="/login" render={({match}) => <Login match={match} sourceURL={this.state.sourceURL}/>} />
          <Route exact path="/schedule" component={Schedule} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );

  }

}

export default App;
