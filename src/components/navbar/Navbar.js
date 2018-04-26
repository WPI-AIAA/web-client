import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

class Navbar extends Component {

    render() {

        return (
            <div className="Navbar">

                <div className="container">
                    <div className="row">
                        <img className="banner-img" src="/images/banners/banner-white-accent.svg" alt="logo" style={{width: '70%'}}/>
                    </div>
                    <div className="row">
                        <nav className="nav">
                            <span className="nav-link"> <Link className="link" to='/home'> <p className="nav-text">     Home    </p> </Link> </span>
                            <span className="nav-link"> <Link className="link" to='/about'> <p className="nav-text">    About   </p> </Link> </span>
                            <span className="nav-link"> <Link className="link" to='/events'> <p className="nav-text">   Events  </p> </Link> </span>
                            <span className="nav-link"> <Link className="link" to='/login'> <p className="nav-text">    Login   </p> </Link> </span>
                        </nav>
                    </div>



                </div>
            </div>
                );
        
            }
        }
        
        export default Navbar;
