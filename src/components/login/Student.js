import React, { Component } from 'react';

class Student extends Component {

    constructor() {
        super();
    }

    render() {

        return(
            <li className = "Student">
                <span>
                    {this.props.student.firstName + ' '}
                    
                    {this.props.student.lastName}
                </span>
            </li>
        );
    }
}

export default Student;
