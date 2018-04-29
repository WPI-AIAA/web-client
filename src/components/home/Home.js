import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            imageList: []
        }
    }

    // TODO: Auto populate based on images in the home folder

    render() {

        return (
            <div className="Home">

                <div className="slide-show">
                    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-targer="#carouselIndicators" data-slide-to="0" className="active"/>
                            <li data-targer="#carouselIndicators" data-slide-to="1"/>
                            <li data-targer="#carouselIndicators" data-slide-to="2"/>
                        </ol>

                        <div className="carousel-inner" style={{height: '68vh'}}>
                            <div className="carousel-item active">
                                <img src="/images/home/test1.png" alt="image" style={{height: "68vh", width: 'auto'}}/>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/home/test2.jpg" alt="image" style={{height: "68vh", width: 'auto'}}/>
                            </div>
                            <div className="carousel-item">
                                <img src="/images/home/test3.jpg" alt="image" style={{height: "68vh", width: 'auto'}}/>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only"> Previous </span>
                        </a>
                        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only"> Next </span>
                        </a>
                    </div>
                </div>

            </div>
        );

    }
}

export default Home;
