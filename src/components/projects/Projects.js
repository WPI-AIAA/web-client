import React, { Component } from 'react';

import './Projects.css';

class Projects extends Component {

    constructor(props) {
        super(props);

        this.state={
            projects: [
                'USLI',
                'BOR',
                'Bagel Maker',
                'Flying Train'
            ]
        }
    }

    render() {

        let projectList;

        if(this.state.projects){

            projectList = this.state.projects.map(currentProject => {
                return (
                    <li> {currentProject} </li>
                );
            });
        }

        return (
            <div className="Projects">

                <h1> Current Projects  </h1>

                <ul>
                    {projectList}
                </ul>

            </div>
        );

    }
}

export default Projects;
