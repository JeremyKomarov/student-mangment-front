import React from "react";
import "./Registrations.css";
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentChart from "./RegisteredStudentChart";

function Registrations(props) {
    return (
        <div className="registrations card">
            <RegisteredStudentChart
                registeredStudents={props.registeredStudents}
                courses={props.courses}
            />
            <RegisteredStudentList
                registeredStudents={props.registeredStudents}
                courses={props.courses}
            />
        </div>
    );
}

export default Registrations;
