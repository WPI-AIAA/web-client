import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFile, faFilePdf, faFileImage, faFileArchive, faFileCode,
    faFileWord, faFilePowerpoint, faFileExcel, faFileAlt
} from '@fortawesome/free-solid-svg-icons';


import './File.css';

import USLIFileStore from "../../../store/USLIFileStore";

class File extends Component {

    handleFileDownload(path) {
        console.log("Attempting to download:");
        console.log(path);
        USLIFileStore.getFile(path);
    }

    // Deal with later
    hashCode(path){

    }

    // Decides which icon should be used for each file type
    getIconType(name){
        // Get the file extension
        const ext = name.substring(name.lastIndexOf('.') + 1).toLowerCase();
        let icon;

        switch(ext){
            case "pdf":
                icon = faFilePdf;
                break;

            case "jpg": case "jpeg": case "png": case "gif":
                icon = faFileImage;
                break;

            case "zip": case "rar": case "tar":
                icon = faFileArchive;
                break;

            case "doc": case "docx":
                icon = faFileWord;
                break;

            case "ppt": case "pptx":
                icon = faFilePowerpoint;
                break;

            case "xls": case "xlsx":
                icon = faFileExcel;
                break;

            case "txt": case "md":
                icon = faFileAlt;
                break;

            case "js": case "css": case "html":
            case "c": case "cpp": case "h": case "hpp":
            case "py": case "ino":
                icon = faFileCode;
                break;

            default:
                icon = faFile;
                break;
        }

        return icon;
    }

    render() {

        return (
            <div className="File" key={this.props.path}>
                <div className={"fileTitle"} onClick={() => this.handleFileDownload(this.props.path)}>
                    <div className={"fileSpacer"} />
                    <div className={"fileIconContainer"}>
                        <FontAwesomeIcon className={"fileIcon"} icon={this.getIconType(this.props.name)}/>
                    </div>
                    <p className={"fileName"}> {this.props.name} </p>
                </div>
            </div>
        );
    }
}

export default File;
