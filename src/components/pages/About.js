import React, { Component } from 'react';

import './About.css';

class About extends Component {

    tableRow(position, duties, name){
        return(
            <div className={"aboutTableRow"}>
                <div className={"aboutTablePosition"}>
                    <p> {position} </p>
                    <p> {duties} </p>
                </div>
                <p> {name} </p>
            </div>
        );
    }

    render() {

        const leadershipList = [
            {
                position: "Chairman",
                duties: "Management, Recruitment",
                name: "Isaiah Fleischer"
            },
            {
                position: "Vice-Chairman",
                duties: "Backup to Chairman, Project Organization",
                name: "Peter Dohn"
            },
            {
                position: "Secretary",
                duties: "Meeting Notes, Internal Communications",
                name: "Steffany Halfrey"
            },
            {
                position: "Treasurer",
                duties: "Budget Managment",
                name: "Kyle Foster"
            },
            {
                position: "Public Relations",
                duties: "External Communications, Marketing Management",
                name: "Jarod Romankiw"
            },
            {
                position: "Faculty Adviser",
                duties: "Oversee Club Activities",
                name: "John Blandino, PhD"
            }
        ];

        let leadership = leadershipList.map(entry => {
            return(
                <div className={"aboutTableRow"} key={entry.position}>
                    <div className={"aboutTableDetails"}>
                        <p className={"aboutTablePosition"}> {entry.position} </p>
                        <p className={"aboutTableDuties"}> {entry.duties} </p>
                    </div>
                    <p className={"aboutTableName"}> {entry.name} </p>
                </div>
            );
        });

        return (
            <div className="About">
                <div className={"aboutContainer"}>
                    <h1 className={"aboutHeader"}> ABOUT US </h1>
                    <hr className={"aboutBreak"}/>
                    <h2 className={"aboutSubHeader"}> What is the AIAA? </h2>
                    <p className={"aboutGeneralText"}>
                        The American Institute of Aeronautics and Astronautics (AIAA) is a global organization of over
                        31,000 members that serves to link together professionals, educators, and students of the
                        aerospace industry.
                    </p>
                    <p className={"aboutGeneralText"}>
                        Each year, AIAA sponsors a large number of technical conferences and student competitions across
                        the nation; it also publishes a variety of books – including the AIAA Education series of
                        textbooks – and nine research journals.
                    </p>
                    <p className={"aboutGeneralText"}>
                        Organizationally, AIAA is composed of seven regional offices, sixty-four local sections, and over
                        160 student branches.
                    </p>
                    <h2 className={"aboutSubHeader"}> Leadership </h2>
                    <p className={"aboutGeneralText"}>
                        Our leadership is elected through majority vote by active members of the AIAA.
                    </p>

                    <div className={"aboutTable"}>
                        <div className={"aboutTableHeader"}>
                            <p className={"aboutTableHeaderText"}> Position </p>
                            <p className={"aboutTableHeaderText"}> Name </p>
                        </div>
                        {leadership}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
