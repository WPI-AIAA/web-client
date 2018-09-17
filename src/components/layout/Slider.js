import React, { Component } from 'react';
import Slide from './Slide';

import './Slider.css';

import SliderStore from '../store/SliderStore';

class Slider extends Component {

    constructor(props){
        super(props);

        if(props.images){
            props.images.map(image => {
                SliderStore.addImage(image);
            });
        }

        if(props.interval){
            SliderStore.updateInterval(props.interval);
        }

        this.state={
            image: SliderStore.getCurrentImage()
        }

    }

    componentDidMount(){
        // Add a listener
        SliderStore.on("change", ()=>{
            this.setState({image: SliderStore.getCurrentImage()});
        });
    }

    componentWillUnmount(){
        // Remove the listener so that Slider is not asked to change state when it is not rendered
        SliderStore.removeAllListeners("change");
    }

    getImageHeader(name){
        // In rare cases name may not be defined when this is called.
        if(name){
            return (name.substring(0, name.lastIndexOf('$')));
        } else {
            return "";
        }
    }

    getImageSubHeader(name){
        // In rare cases name may not be defined when this is called.
        if(name){
            return (name.substring(name.lastIndexOf('$') + 1, name.lastIndexOf('.')));
        } else {
            return "";
        }
    }

    render() {

        let settings = {
            image: this.props.src + this.state.image,
            header: this.getImageHeader(this.state.image),
            subHeader: this.getImageSubHeader(this.state.image)
        };

        return (
            <div className="Slider">
                <Slide {...settings} />
            </div>
        );
    }
}

export default Slider;