import EventEmitter from 'events';

class StudentStore extends EventEmitter{
    constructor(){
        super();

        this.students = [];
    }

    getStudents(){
        return this.students;
    }
}

const StudentStore = new StudentStore();

export default StudentStore;