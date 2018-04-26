import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

    render() {

        return (
            <div className="Home">
                <h1 className="intro-text"> Welcome to the American Institute of Aeronautics and Astronautics at WPI! </h1>
                <div className="slide-show"/>
            </div>
        );

    }
}

export default Home;
