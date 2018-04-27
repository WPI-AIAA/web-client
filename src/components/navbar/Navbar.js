import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

class Navbar extends Component {

    render() {

        return (
            <div className="Navbar">

                <div className="container">

                    <nav className="navbar navbar-expand-lg navbar-light">
                        <img className="banner-img navbar-brand" src="/images/branding/banners/banner-white-accent.svg" alt="logo" style={{width: '20vw'}}/>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/home'>      <p className="nav-text">    HOME    </p> </Link>
                                    <span className="pipe"/>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/about'>     <p className="nav-text">    ABOUT   </p> </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/events'>    <p className="nav-text">    EVENTS  </p> </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/subcommittees'> <p className="nav-text"> COMMITTEES </p> </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>     <p className="nav-text">    LOGIN   </p> </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>

            </div>
                );
        
            }
        }
        
        export default Navbar;
