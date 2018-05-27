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
                    <div className="container col-md-8 col-md-offset-2">
                        <div className="table-responsive" >
                            <table className="table">
                                <thead>
                                <tr className="about-tableHeading">
                                    <th>Position</th>
                                    <th>Name</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="about-tableRow">
                                    <td>
                                        <p className="about-tableBold">Chairman</p>
                                        <p className="about-tableLight">Management, Recruitment, Meetings</p>
                                    </td>
                                    <td className="td about-tableBold">Isaiah Fleischer</td>
                                </tr>
                                <tr className="about-tableRow">
                                    <td>
                                        <p className="about-tableBold">Vice-Chairman</p>
                                        <p className="about-tableLight">Backup to Chairman, Subcommittee Organization</p>
                                    </td>
                                    <td className="about-tableBold">Peter Dohn</td>
                                </tr>
                                <tr className="about-tableRow">
                                    <td>
                                        <p className="about-tableBold">Treasurer</p>
                                        <p className="about-tableLight">Budget Management</p>
                                    </td>
                                    <td className="about-tableBold">Kyle Foster</td>
                                </tr>
                                <tr className="about-tableRow">
                                    <td>
                                        <p className="about-tableBold">Secretary</p>
                                        <p className="about-tableLight">Meeting Notes, Internal Communication</p>
                                    </td>
                                    <td className="about-tableBold">Steffany Halfrey</td>
                                </tr>
                                <tr className="about-tableRow">
                                    <td>
                                        <p className="about-tableBold">Public Relations</p>
                                        <p className="about-tableLight">Marketing Management, External Communication</p>
                                    </td>
                                    <td className="about-tableBold">Jarod Romankiw</td>
                                </tr>
                                <tr className="about-tableRow">
                                    <td>
                                        <p className="about-tableBold">Faculty Adviser</p>
                                        <p className="about-tableLight">Oversee Club Activities</p>
                                    </td>
                                    <td className="about-tableBold">John Blandino, PhD</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        );

    }
}

export default About;
