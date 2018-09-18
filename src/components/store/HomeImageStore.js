import React from 'react';
import { EventEmitter } from 'events';
import axios from 'axios';

class HomeImageStore extends EventEmitter {
    constructor(){
        super();

        this.images = [];
        this.imageNames = [];
        this.imageSources = [];
        this.uri = "http://localhost:8282/images/home"
    }

    retrieveImages(){

        let images = [];

        // Fetch Image List
        axios.get(this.uri).then( res => {

            if(JSON.stringify(this.imageNames) !== JSON.stringify(res.data)) {
                // The Images we have already stored are NOT the same as those on the server

                // Update the imageNames
                this.imageNames = res.data;

                this.imageSources = [];
                res.data.forEach( (name, index) => {

                   const tmp = new Image();
                   tmp.src = this.uri + "/get?fileName=" + name;

                   this.imageSources.push({
                       index: index,
                       path: this.uri + "/get?fileName=" + name,
                       header: name.substring(0, name.lastIndexOf('$')),
                       subHeader: name.substring(name.lastIndexOf('$') + 1, name.lastIndexOf('.'))
                   });
                });

                this.emit("IMAGE_PATHS_LOADED");

                // // For each Image Name in the list, retrieve the actual image and create a <img/> object
                // res.data.forEach( (name, index) => {
                //
                //     const header = name.substring(0, name.lastIndexOf('$'));
                //     const subHeader = name.substring(name.lastIndexOf('$') + 1, name.lastIndexOf('.'));
                //
                //     const image = <img  className="homeCarouselImage" src={this.uri + "/get?fileName=" + name} alt={header} />;
                //
                //     images.push({
                //         isLoad: false,
                //         header: header,
                //         subHeader: subHeader,
                //         image: image
                //     });
                //
                // });
                //
                // // Update stored images
                // this.images = images;
                // this.emit("IMAGES_LOADED");
            }

        }).catch( err => {
            console.log("Images failed to load!");
        });
    }

    getPaths(){
        return this.imageSources;
    }

    getImages(){
        return this.images;
    }
}

const homeImageStore = new HomeImageStore();

window.homeImageStore = homeImageStore;

export default homeImageStore;