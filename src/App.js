import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Events from './components/pages/Events';
import Login from './components/pages/Login';
import PageNotFound from './components/pages/PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar/>
            <div className="View">
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/home"} component={Home} />
                <Route exact path={"/about"} component={About} />
                <Route exact path={"/events"} component={Events} />
                <Route exact path={"/login"} component={Login} />
                <Route path={"/projects"} component={Projects} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
