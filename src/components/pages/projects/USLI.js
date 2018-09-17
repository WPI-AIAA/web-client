import React, { Component } from 'react';

import './USLI.css';

import ApiStore from '../../store/ApiStore';
import USLIFileStore from '../../store/USLIFileStore';

import Directory from './files/Directory'

class USLI extends Component {

    constructor(){
        super();

        this.state= {
            source: ApiStore.getSource(),
            fileTree: USLIFileStore.getFileTree(),
        };
    }

    componentDidMount(){

        // Listen to the filestore when the tree is updated
        USLIFileStore.on("change", () => {
            this.setState({fileTree: USLIFileStore.getFileTree()});
        });
    }

    render() {

        return (
            <div className="USLI">
                <h1 className={"usliHeader"}> University Student Launch Initiative </h1>
                <p className={"usliText"}>
                    University Student Launch Initiative is a collegiate rocketry competition hosted by NASA at
                    Marshal Spaceflight Center in Hunstville, AL. Teams design a rocket to fly to an altitude of
                    one mile and release a payload mid-flight. Once the payload lands it will deploy a drone to
                    fly to a designated area and drop a small marker.
                </p>
                <hr className={"usliBreak"} />
                <Directory name={this.state.fileTree.name} path={this.state.fileTree.path} files={this.state.fileTree.children} />
            </div>
        );
    }
}

export default USLI;