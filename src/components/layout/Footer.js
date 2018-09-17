import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className={"footerContainer"}>
                    <div className={"footerImageContainer"}>
                        <img className={"footerImage"} src={"/resources/graphics/logo-light.png"} alt={"AIAA Logo"}/>
                    </div>
                    <div className={"footerIcons"}>
                        <FontAwesomeIcon className={"footerIcon"} icon={faFacebookF} onClick={() => window.open("https://www.facebook.com/WPIAIAA")}/>
                        <FontAwesomeIcon className={"footerIcon"} icon={faTwitter}/>
                        <FontAwesomeIcon className={"footerIcon"} icon={faInstagram} onClick={() => window.open("https://www.instagram.com/wpi_aiaa/")}/>
                        <FontAwesomeIcon className={"footerIcon"} icon={faYoutube}/>
                        <FontAwesomeIcon className={"footerIcon"} icon={faLinkedinIn}/>
                    </div>
                    <p className={"footerText"}>
                        © 2018 Worcester Polytechnic Institute:
                        American Institute of Aeronautics and Astronautics.
                        All rights reserved.
                    </p>
                    <p className={"footerText"}>
                        100 Institute Road, Worcester, MA 01609
                    </p>


                </div>
            </div>
        );
    }
}

export default Footer;
