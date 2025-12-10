import React, { useState } from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveRegisteredStudentDataHandler = (enteredStudentData) => {
        const studentData = {
            id: Math.random().toString(),
            ...enteredStudentData,
        };

        props.onRegisteredNewStudent(studentData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-registration">
            {!isEditing && (
                <button onClick={startEditingHandler}>
                    Register New Student
                </button>
            )}
            {isEditing && (
                <StudentForm
                    onSaveRegisteredStudentData={
                        saveRegisteredStudentDataHandler
                    }
                    courses={props.courses}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
}

export default NewStudent;
