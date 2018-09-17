import React, { Component } from 'react';

import './Slider.css';

class Slide extends Component {

    render() {

        if(this.props.image && this.props.header && this.props.subHeader){
            return (
                <div className="Slide">
                    <img className={"slideImage"} src={this.props.image} alt={this.props.header} />
                    <div className={"slideText"}>
                        <p className={"slideHeader"}> {this.props.header} </p>
                        <p className={"slideSubHeader"}> {this.props.subHeader} </p>
                    </div>
                </div>
            );
        } else {
            console.log("Carousel failed to load and image");
            this.forceUpdate();
            return (
                <div>
                    <p> Something went wrong with the carousel. </p>
                </div>
            );
        }
    }
}

export default Slide;