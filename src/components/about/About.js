import React, { Component } from 'react';

import './About.css';

class About extends Component {


    render() {

        return (
            <div className="About">
                <div className="about-content">
                    <h1 className="about-heading"> ABOUT US </h1>
                    <div className="line-break"/>
                    <h2 className="about-subheading"> What is AIAA? </h2>
                    <p className="about-text">
                        The American Institute of Aeronautics and Astronautics (AIAA) is a global organization of over
                        31,000 members that serves to link together professionals, educators, and students of the
                        aerospace industry.
                    </p>
                    <p className="about-text">
                        Each year, AIAA sponsors a large number of technical conferences and student competitions across
                        the nation; it also publishes a variety of books - including the AIAA Education Series of
                        textbooks - and nine research journals.
                    </p>
                    <p className="about-text">
                        Organizationally, AIAA is composed of seven regional offices, sixty-four local sections, and over
                        160 student branches. You can find more information <a href="http://aiaa.org/"> here</a>.
                    </p>
                    <h2 className="about-subheading"> Leadership </h2>
                    <img className="leadership-img" src="/images/home/test3.jpg" alt="AIAA Officers"/>

                </div>


            </div>
        );

    }
}

export default About;
