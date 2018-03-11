import React, { Component } from 'react';

import Student from './Student'

class Location extends Component {

    constructor() {
        super();

        this.kickStudent = this.kickStudent.bind(this);

        this.state = {
            presentStudentList: []
        }
    }

    componentWillMount(){
        fetch(this.props.sourceURL + "/stats/students")
            .then(response => response.json())
            .then(data => this.setState({presentStudentList: data}));
    }

    // Kicks a student from this location
    kickStudent(student) {

        // Create a new list without the kicked student
        let newStudentList = this.state.presentStudentList.filter(currentStudent => currentStudent !== student);

        // TODO: Send Kick Request to the server

        // Set the state to the new list without the kicked student
        this.setState({ presentStudentList: newStudentList });
    }

    render() {
        // Holds the 'rendered list of students
        let displayStudentList;
        
        // Ensures that there is something in presentStudentList
        if (this.state.presentStudentList) {

            // Map through the presentStudentList and write the result into displayStudentList
            displayStudentList = this.state.presentStudentList.map(currentStudent => {
                
                return ( // Add a student displayed on the list
                    <Student key={currentStudent.studentId} student={currentStudent} onStudentKick={this.kickStudent}/>
                );

            });

        }

        return (
            <div className="Location" id={this.props.locationName}>
                <h1> {this.props.locationName} </h1>
                <h3> Whose here? </h3>
                <ul>
                    {displayStudentList}
                </ul>
            </div>
        );
        
    }
}

export default Location;
