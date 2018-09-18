import React, { Component } from 'react';
import HomeImageStore from '../store/HomeImageStore';
import Slider from '../layout/Slider';

import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: HomeImageStore.getPaths()
        }
    }

    componentDidMount(){

        HomeImageStore.on("IMAGE_PATHS_LOADED", () => {
            this.setState({images: HomeImageStore.getPaths()});
        });

        HomeImageStore.retrieveImages(); // TODO: Convert to action
    }

    componentWillUnmount(){
        HomeImageStore.removeAllListeners();
    }

    createSlides(){

        let slides = [];

        this.state.images.forEach( image => {

            slides.push(
                <div className={"homeCarouselSlide"} key={image.key}>
                        <img className={"homeCarouselImage"} src={image.path}/>
                        <div className={"homeCarouselText"}>
                            <p className={"homeCarouselHeader"}> {image.header} </p>
                            <p className={"homeCarouselSubHeader"}> {image.subHeader} </p>
                        </div>
                </div>
            );

            });

        return(slides);
    }


    render() {

        return (
            <div className="Home">
                <Slider images={this.state.images} />
            </div>
        );
    }
}

export default Home;
