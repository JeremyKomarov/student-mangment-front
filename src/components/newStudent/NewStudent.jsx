import React from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent(props) {
    const saveRegisteredStudentDataHandler = (enteredStudentData) => {
        const studentData = {
            id: Math.random().toString(),
            ...enteredStudentData,
        };
        props.onRegisteredNewStudent(studentData);
    };

    return (
        <div className="new-registration">
            <StudentForm
                onSaveRegisteredStudentData={saveRegisteredStudentDataHandler}
            />
        </div>
    );
}

export default NewStudent;
