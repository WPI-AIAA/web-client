import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import Navbar         from './components/navbar/Navbar';
import Footer         from './components/footer/Footer';

import Home           from './components/home/Home';
import Login          from './components/login/Login';
import About          from './components/about/About';
import Events         from './components/events/Events';
import Projects       from './components/projects/Projects';
import PageNotFound   from './components/pagenotfound/PageNotFound';

import Admin          from './components/admin/Admin';


class App extends Component {

  constructor(props) {
    super(props);
    // Handle any DB Initialization

    this.state = {
      sourceURL: "localhost:8080" //Find an appropriate port number later
    }
  }

  render() {

    // TODO: Change Login
    return (
      <div className="App">

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route path="/login" render={({match}) => <Login match={match} sourceURL={this.state.sourceURL}/>} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/admin" component={Admin} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );

  }

}

export default App;
