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

    //                         <Link className="test-link" to='/home'> <p className="test-text"> PROJECTS </p>  </Link>

    render() {

        let routeList;



        return (
            <div className="Navbar">
                <div className="nav-img">
                    <img src="/images/branding/banners/banner-white-accent.svg" alt="logo" style={{height: '100%', width: 'auto'}}/>
                </div>
                <ul className="nav-list">
                    <li className="nav-item"><Link className="nav-link" to="/home"> HOME </Link></li>
                    <li className="nav-item"><div className="pipe"/></li>
                    <li className="nav-item"><Link className="nav-link" to="/about"> ABOUT </Link></li>
                    <li className="nav-item"><div className="pipe"/></li>
                    <li className="nav-item"><Link className="nav-link" to="/events"> EVENTS </Link></li>
                    <li className="nav-item"><div className="pipe"/></li>
                    <li className="nav-item"><Link className="nav-link" to="/projects"> PROJECTS </Link></li>
                    <li className="nav-item"><div className="pipe"/></li>
                    <li className="nav-item"><Link className="nav-link" to="/login"> LOGIN </Link></li>
                </ul>
            </div>
                );
        
            }
        }
        
        export default Navbar;
