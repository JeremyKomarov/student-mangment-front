import React, { useState } from "react";
import "./NewStudent.css";
import StudentForm from "./StudentForm";

function NewStudent({ courses, onRegisteredNewStudent }) {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-registration">
      {!isEditing && (
        <button onClick={startEditingHandler}>Register New Student</button>
      )}
      {isEditing && (
        <StudentForm
          onSaveRegisteredStudentData={onRegisteredNewStudent}
          courses={courses}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewStudent;
