import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

    render() {

        return (
            <div className="Footer">

                <div className="footer-break" />

                <div>
                    <span>
                        <h1 className="footer-heading"> Contact </h1>
                        <a href=""> <i className="fab fa-linkedin footer-icon" /> </a>
                        <a href="http://www.instagram.com/"> <i className="fab fa-instagram footer-icon" /> </a>
                        <a href="https://www.facebook.com/WPIAIAA/"> <i className="fab fa-facebook footer-icon" /> </a>
                    </span>
                    <p className="footer-text"> American Institute of Aeronautics and Astronautics </p>
                    <p className="footer-text"> Worcester Polytechnic Institute </p>
                    <p className="footer-text"> 100 Institute Road, Worcester, MA 01609 </p>
                </div>

            </div>
        );

    }
}

export default Footer;
