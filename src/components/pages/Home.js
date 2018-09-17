import React, { Component } from 'react';
import Slider from '../layout/Slider';

import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const settings = {
            src: "/resources/images/home/",
            interval: 5000,
            images: [
                "Battle of the Rockets$Cullpeper, VA.jpg",
                "Ice-Cream Social$April 2018.jpg",
                "New Year, New Leaders$AIAA Interest Meeting 2018.jpg"
            ]
        };

        return (
            <div className="Home">
                <Slider {...settings}/>
            </div>
        );
    }
}

export default Home;
