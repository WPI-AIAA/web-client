import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretRight, faFolderOpen} from '@fortawesome/free-solid-svg-icons';

import './File.css';

import File from './File';

class Directory extends Component {

    constructor(props){
        super(props);

        this.handleViewToggle = this.handleViewToggle.bind(this);

        this.state = {
            isHidden: true
        }
    }

    handleViewToggle(){
        if(this.state.isHidden){
            this.setState({isHidden: false});
        } else {
            this.setState({isHidden: true});
        }
    }

    render() {
        
        let caret;
        let files;

        if(typeof this.props.files !== 'undefined' && this.props.files.length > 0){
            // This directory HAS at least one element

            if(this.state.isHidden){
                // This directory is hidden
                caret = <FontAwesomeIcon className={"directoryCaret"} icon={faCaretRight}/>;

                // Since this directory is hidden we don't render its elements
                files = <div />;

            } else {
                // This directory is NOT hidden
                caret = <FontAwesomeIcon className={"directoryCaret"} icon={faCaretDown}/>;

                // Since this directory is visible we map through its elements and render them
                files = this.props.files.map(file => {
                    if (file.type === "directory") {
                        return (<Directory key={file.path} name={file.name} path={file.path} files={file.children}/>);
                    } else if (file.type === "file") {
                        return (<File key={file.path} name={file.name} path={file.path}/>);
                    }
                    // Should never happen
                    return <div />
                });

            }

        } else {
            // This directory does not have any elements
            caret = <div className={"directoryNoCaret"}/>
        }

        return (
            <div className="Directory">
                <div className={"directoryTitle"} onClick={this.handleViewToggle}>
                    <div className={"directorySpacer"} >
                        {caret}
                    </div>
                    <div className={"directoryIconContainer"} >
                        <FontAwesomeIcon className={"directoryIcon"} icon={faFolderOpen}/>
                    </div>
                    <p className={"directoryName"}> {this.props.name} </p>
                </div>
                <div className={"directoryChildren"}>
                    {files}
                </div>
            </div>
        );
    }
}

export default Directory;
