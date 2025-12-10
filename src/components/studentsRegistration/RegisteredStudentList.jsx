import React from "react";
import "./RegisteredStudentList.css";
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList(props) {
    return (
        <ul className="registrations-list">
            {props.registeredStudents.map((student) => {
                return (
                    <RegisteredStudent
                        key={student.id}
                        registeredStudent={student}
                        course={props.courses[student.course]}
                    />
                );
            })}
        </ul>
    );
}

export default RegisteredStudentList;
