import React, { Component } from 'react';

import './Location.css';

import Student from './Student'

class Location extends Component {

    constructor(props) {
        super(props);

        this.kickStudent = this.kickStudent.bind(this);
        this.logStudent = this.logStudent.bind(this);

        this.state = {
            presentStudentList: []
        }
    }

    componentWillMount(){

        // Get Data from Data Base
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

        // Erase and refocus on the text field
        this.refs.login.value = "";
        this.refs.login.focus();
    }

    logStudent(event) {
        event.preventDefault(); // Prevents the page from reloading

        // Store the entered value so we can use it later
        let enteredValue = this.refs.login.value;

        // Reset the entered value to ""
        this.refs.login.value = "";

        //TODO: Parse swipe, send Login Info to server
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

        // Render the Display
        return (
            <div className="Location" id={this.props.locationName}>

                <img src={"/images/" + this.props.locationName + ".png"} alt={this.props.locationName}/>

                <p> Swipe In </p>
                <form onSubmit={this.logStudent}>
                    <input autoFocus type="text" ref="login"/>
                </form>

                <h3> Whose here? </h3>
                <ul>
                    {displayStudentList}
                </ul>

            </div>
        );
        
    }
}

export default Location;
