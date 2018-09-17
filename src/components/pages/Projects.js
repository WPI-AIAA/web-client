import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import './Projects.css';

import USLI from './projects/USLI';
import BOR from './projects/BOR';
import DBF from './projects/DBF';

class Projects extends Component {

    defaultText(){
        return(
            <p className={"projectDefaultText"}> Select a project to learn more about it. </p>
        );
    }



    render() {
        return (
            <div className="Projects">
                <div className={"projectContainer"}>

                    <h1 className={"projectHeader"}> PROJECTS </h1>
                    <hr className={"projectBreak"}/>
                    <h2 className={"projectSubHeader"}> What are AIAA projects? </h2>
                    <p className={"projectGeneralText"}>
                        The AIAA operates several different, student run projects concurrently.
                        Project work allows students to apply theory from the classroom while
                        simultaneously gaining valuable experience in teamwork and organization.
                    </p>

                    <div className={"projectsContainer"}>
                        <ul className={"projectsList"}>
                            <li className={"projectListItem"}><Link className={"projectLink"} to={"/projects/usli"}> USLI </Link></li>
                            <li className={"projectListItem"}><Link className={"projectLink"} to={"/projects/bor"}> Battle of the Rockets </Link></li>
                            <li className={"projectListItem"}><Link className={"projectLink"} to={"/projects/dbf"}> Design. Build. Fly. </Link></li>
                        </ul>

                        <div className={"projectView"}>
                            <Switch>
                                <Route exact path={"/projects/usli"} component={USLI} />
                                <Route exact path={"/projects/bor"} component={BOR} />
                                <Route exact path={"/projects/dbf"} component={DBF} />
                                <Route component={this.defaultText} />
                            </Switch>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Projects;
