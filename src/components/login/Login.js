import React, { Component } from 'react';

import Lounge from './Lounge'

class Login extends Component {

    constructor() {
        super();

        var studentList = [];
    }

    componentWillMount(){


        fetch('http://localhost:8080/stats/students')
            .then(function (response) {
                return response.json();
            })
            .then(function (studentList) {
                //console.log(studentList);
                for(let student of studentList){
                    studentList.push(student);
                }
            });

    }

    render() {
        return(
            <div className="Login">
                <Lounge students={this.studentList}/>
            </div>
        );
    }
}

export default Login;
