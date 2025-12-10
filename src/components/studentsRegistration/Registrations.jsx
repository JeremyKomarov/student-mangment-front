import React, { useState } from "react";
import "./Registrations.css";
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentChart from "./RegisteredStudentChart";
import RegisteredStudentFilter from "./RegisteredStudentFilter";

function Registrations(props) {
    const [filteredCourse, setFilteredCourse] = useState("fullstack");

    const filteredChangeHandler = (selectedCourse) => {
        setFilteredCourse(selectedCourse);
    };

    const filteredRegisteredStudents = props.registeredStudents.filter(
        (student) => {
            return student.course === filteredCourse;
        }
    );

    return (
        <div className="registrations card">
            <RegisteredStudentChart
                registeredStudents={props.registeredStudents}
                courses={props.courses}
            />
            <RegisteredStudentFilter
                selected={filteredCourse}
                onChangeFilter={filteredChangeHandler}
            />
            <RegisteredStudentList
                registeredStudents={filteredRegisteredStudents}
                courses={props.courses}
            />
        </div>
    );
}

export default Registrations;
