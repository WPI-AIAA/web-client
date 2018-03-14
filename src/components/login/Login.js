import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import Location from './Location'
import PageNotFound from '../pagenotfound/PageNotFound';

class Login extends Component {

    constructor(props) {
        super(props);

        this.displayLocations = this.displayLocations.bind(this);

        this.state = {
            locationsList: []
        }
    }

    componentWillMount() {
        fetch(this.props.sourceURL + "/stats/locations")
            .then(response => response.json())
            .then(data => this.setState({ locationsList: data }));
    }

    displayLocations() {

        let locationLinks;

        if (this.state.locationsList) {
            locationLinks = this.state.locationsList.map(currentLocation => {
                return (
                    <li key={currentLocation.name}>
                        <Link to={this.props.match.path + "/" + currentLocation.name} style={{textTransform: "capitalize"}}> {currentLocation.name} </Link>
                        <p> The <span style={{textTransform: "capitalize"}}>{currentLocation.name}</span> is {currentLocation.state} </p>
                    </li>
                );
            });
        }

        return (
            <div>
                <h1> Listings </h1>
                <ul>
                    {locationLinks}
                </ul>
            </div>
        );
    }

    render() {

        return(
            <div className="Login">
                    <Switch>
                        <Route exact path={this.props.match.path + "/lounge"} render={({match}) => <Location match={match} locationName={"lounge"} sourceURL={this.props.sourceURL} /> } />
                        <Route exact path={this.props.match.path + "/lab"} render={({match}) => <Location match={match} locationName={"lab"} sourceURL={this.props.sourceURL} />} />
                        <Route exact path={this.props.match.path} component={this.displayLocations} />
                        <Route component={PageNotFound} />
                    </Switch>
            </div>
        );
    }
}

export default Login;
