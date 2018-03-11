import React, { Component } from 'react';

import Location from './Location'

class Login extends Component {

    constructor() {
        super();
    }

    render() {
        return(

            <div className="Login">
                    <Location locationName={"lounge"} sourceURL={this.props.sourceURL}/>
            </div>
        );
    }
}

export default Login;
