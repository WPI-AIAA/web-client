import React, { Component } from 'react';

import './Slider.css';

class Slide extends Component {

    render() {

        let isHidden = true;

        if(this.props.slide === this.props.index){
            return (
                <div className="Slide" key={this.props.index}>
                    <img className={"slideImage"} src={this.props.path} alt={this.props.header} />
                    <div className={"slideText"}>
                        <p className={"slideHeader"}> {this.props.header} </p>
                        <p className={"slideSubHeader"}> {this.props.subHeader} </p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Slide;