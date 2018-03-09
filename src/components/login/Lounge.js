import React, { Component } from 'react';

import Student from './Student'

class Lounge extends Component {

    constructor() {
        super(); 
    }

    render() {

        let students;
        
        if(this.props.students){
            students=this.props.students.map(student => {
                //console.log(student);
                return(
                    <Student key={student.firstName} student={student}/>
                );
            });
        }

        return(
            <div className="Lounge">
                <h1> Lounge </h1>
                <h3> Students: </h3>
                <ul>
                    {students}
                </ul>
            </div>
        );
    }
}

export default Lounge;
