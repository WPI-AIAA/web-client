import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div className="Navbar">
                <div className={"navContent"}>
                    <div className={"navImageContainer"}>
                        <img className={"navImage"} src={"/resources/graphics/logo-light.png"} alt={"AIAA Logo"}/>
                    </div>
                    <ul className={"navItemList"}>
                        <li className={"navItem"}><Link className={"navLink"} to={"/home"}>Home</Link></li>
                        <li className={"navItem"}><Link className={"navLink"} to={"/about"}>About</Link></li>
                        <li className={"navItem"}><Link className={"navLink"} to={"/events"}>Events</Link></li>
                        <div>
                            <li className={"navItem"}><Link className={"navLink"} to={"/projects"}>Projects</Link></li>
                            {/*<ul className={"navProjectsDropdown"}>*/}
                                {/*<li className={"navProjectsDropdownItem"}><Link className={"navProjectsDropdownLink"} to ={"/projects/usli"}> University Student Launch Initiative </Link></li>*/}
                                {/*<li className={"navProjectsDropdownItem"}><Link className={"navProjectsDropdownLink"} to ={"/projects/bor"}> Battle of the Rockets </Link></li>*/}
                                {/*<li className={"navProjectsDropdownItem"}><Link className={"navProjectsDropdownLink"} to ={"/projects/dbf"}> Design. Build. Fly. </Link></li>*/}

                            {/*</ul>*/}
                        </div>
                        <li className={"navItem"}><Link className={"navLink"} to={"/login"}>Login</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
