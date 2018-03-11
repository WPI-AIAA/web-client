import React, { Component } from 'react';

class Student extends Component {

    constructor() {
        super();

        this.kick = this.kick.bind(this);
    }

    kick() {
        // Pass this up to the parent
        this.props.onStudentKick(this.props.student);
    }

    render() {
        return(
            <li className = "Student">
                <span>
                    {this.props.student.firstName + ' '}
                    {this.props.student.lastName}
                </span>

                <button onClick={this.kick}> Kick </button>
            </li>
        );
    }
}

export default Student;
