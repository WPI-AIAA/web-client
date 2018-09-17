import EventEmitter from 'events';

class ApiStore extends EventEmitter{
    constructor(){
        super();
        this.source = "http://localhost:8282"
    }


    getSource(){
        return this.source;
    }
}

const apiStore = new ApiStore();

export default apiStore;