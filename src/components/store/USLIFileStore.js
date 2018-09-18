import { EventEmitter } from 'events';
import axios from 'axios';

class USLIFileStore extends EventEmitter {
    constructor(){
        super();
        this.uri = "/files/usli";
        this.fileTree = {};
    }

    updateFileTree(){
        // Update the filetree from the server
        axios.get("http://localhost:8282/files/usli")
            .then( res => {
                if(JSON.stringify(res.data) !== JSON.stringify(this.fileTree)){
                    this.fileTree = res.data;
                    this.emit("change");
                }
            });
    }

    getFileTree(){
        this.updateFileTree();
        return this.fileTree;
    }

    getFile(name){

        axios.get("http://localhost:8282/files/usli/get?filePath=" + name)
            .then( res => {
                // Must be res.status == "200" despite recommendations to change to ===
                if(res.status == "200"){
                    window.open("http://localhost:8282/files/usli/get?filePath=" + name, '_blank');
                } else {
                    console.log("The file was unable to be loaded!");
                }
            });
    }

}

const usliFileStore = new USLIFileStore();

export default usliFileStore