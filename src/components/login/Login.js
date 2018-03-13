import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Location from './Location'

class Login extends Component {

    constructor(props) {
        super(props);

        this.locationList = this.locationList.bind(this);
    }

    locationList() {
        return (
            <h1> Location Listings </h1>
        );
    }

    testing() {
        return (
            <h1> Route Testing </h1>
        );
    }

    render() {

        console.log(this.props.sourceURL);
        console.log(this.props.match.path);
        console.log(this.props.match.path + "/lounge");

        return(
            <div className="Login">
                    <h1> Login </h1>
                    <Switch>
                        <Route exact path={this.props.match.path + "/lounge"} render={({match}) => <Location match={match} locationName={"lounge"} sourceURL={this.props.sourceURL} /> } />
                        <Route exact path={this.props.match.path + "/lab"} render={({match}) => <Location match={match} locationName={"lab"} sourceURL={this.props.sourceURL} />} />
                        <Route exact path={this.props.match.path + "/test"} component={this.testing} />
                        <Route path={this.props.match.path} component={this.locationList} />
                    </Switch>
            </div>
        );
    }
}

export default Login;
