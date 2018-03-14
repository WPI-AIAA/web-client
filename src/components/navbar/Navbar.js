import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

class Navbar extends Component {

    render() {

        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <span className="navbar-brand">AIAA@WPI</span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/home'> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/schedule'> Schedule </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'> Login </Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
                );
        
            }
        }
        
        export default Navbar;
