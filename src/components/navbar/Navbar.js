import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state={
            activeLinks: [
                'home',
                'about',
                'events',
                'projects',
                'login'
            ]
        }
    }

    render() {

        let routeList;

        if(this.state.activeLinks){

            // Map through the activeLinks list
            routeList = this.state.activeLinks.map(currentLink => {
                return (
                    <li className="nav-item"><Link className="nav-link" to={'/' + currentLink}> {currentLink.toUpperCase()} </Link></li>
                );
            });
        }

        return (
            <div className="Navbar">
                <div className="nav-img">
                    <img src="/images/branding/banners/banner-white-accent.svg" alt="logo" style={{height: '100%', width: 'auto'}}/>
                </div>
                <ul className="nav-list">
                    {routeList}
                </ul>
            </div>
        );
    }
}
        
        export default Navbar;
