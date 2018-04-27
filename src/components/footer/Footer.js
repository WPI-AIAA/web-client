import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

    render() {

        return (
            <div className="Footer">

                <div className="container">
                    <div className="footer-break" />

                    <div className="row">
                        <div className="col-md-9">
                            <h1 className="footer-heading"> Contact </h1>
                            <p className="footer-text"> American Institute of Aeronautics and Astronautics  </p>
                            <p className="footer-text"> Worcester Polytechnic Institute                     </p>
                            <p className="footer-text"> 100 Institute Road, Worcester, MA 01609             </p>
                        </div>
                        <div className="col-md-3">
                            <a href="https://www.linkedin.com/">            <i className="fab fa-linkedin footer-icon" />   </a>
                            <a href="https://www.instagram.com/wpi_aiaa/">  <i className="fab fa-instagram footer-icon" />  </a>
                            <a href="https://www.facebook.com/WPIAIAA/">    <i className="fab fa-facebook footer-icon" />   </a>
                        </div>

                    </div>

                </div>

            </div>
        );

    }
}

export default Footer;
