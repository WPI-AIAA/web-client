import { EventEmitter } from 'events';

class SliderStore extends EventEmitter{

    constructor(){
        super();

        this.images = [];
        this.currentImage = 0;
        this.interval = 5000;

        this.updateCurrentImage = this.updateCurrentImage.bind(this);
        this.timer = setInterval(this.updateCurrentImage, this.interval);
    }

    addImage(image){
        this.images.push(image);
    }

    getCurrentImage(){
        return this.images[this.currentImage];
    }

    updateCurrentImage(){

        if(this.currentImage === this.images.length - 1){
            this.currentImage = 0;
        } else {
            this.currentImage++;
        }

        this.emit("change");
    }

    updateInterval(interval){
        this.interval = interval;
        clearInterval(this.timer);
        this.timer = setInterval(this.updateCurrentImage, interval);
    }

    // This is dumb and I should fix this later
    // TODO: Make it so I don't have to clear the SliderStore when not viewing HOME
    clear(){

    }


}

const sliderStore = new SliderStore();

export default sliderStore;
