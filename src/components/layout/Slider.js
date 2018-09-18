import React, { Component } from 'react';
import Slide from './Slide';

import './Slider.css';

class Slider extends Component {

    constructor(props){
        super(props);

        this.state = {
            slideIndex: 0
        };

        this.interval = null;
    }

    componentDidMount(){

        this.interval = setInterval(() =>{
            let index = this.state.slideIndex + 1;

            if(index < this.props.images.length){
                this.setState({slideIndex: index});
            } else {
                this.setState({slideIndex: 0});
            }

            console.log("Slide Index: " + this.state.slideIndex);
        } , 5000);

    }

    componentWillUnmount(){

        clearInterval(this.interval);
    }

    render() {

        let slides = [];

        this.props.images.forEach( image => {
            slides.push(
                <Slide slide={this.state.slideIndex} {...image}/>
            );
        });

        return (
            <div className="Slider">
                {slides}
            </div>
        );
    }
}

export default Slider;