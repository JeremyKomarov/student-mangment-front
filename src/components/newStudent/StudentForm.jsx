import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm(props) {
    const [enteredStudentName, setEnteredStudentName] = useState("");
    const [enteredStudentCourse, setEnteredStudentCourse] = useState("");
    const [enteredStartDate, setEnteredStartDate] = useState("");

    const studentNameChangeHandler = (event) => {
        setEnteredStudentName(event.target.value);
    };

    const studentCourseChangeHandler = (event) => {
        setEnteredStudentCourse(event.target.value);
    };

    const startDateChangeHandler = (event) => {
        setEnteredStartDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const studentData = {
            studentName: enteredStudentName,
            course: enteredStudentCourse,
        };

        props.onSaveRegisteredStudentData(studentData);

        setEnteredStudentName("");
        setEnteredStudentCourse("");
        setEnteredStartDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-registration__controls">
                <div className="new-registration__control">
                    <label>Student Name</label>
                    <input
                        type="text"
                        onChange={studentNameChangeHandler}
                        value={enteredStudentName}
                        required
                    />
                </div>
                <div className="new-registration__control">
                    <label>Course Name</label>
                    <select
                        className="course-selection"
                        onChange={studentCourseChangeHandler}
                        value={enteredStudentCourse}
                        required
                    >
                        <option value="" disabled>
                            Please Choose A Course
                        </option>
                        <option value="fullstack">Fullstack Course</option>
                        <option value="qa">QA Course</option>
                        <option value="cyber">Cyber Course</option>
                        <option value="product">
                            Product Management Course
                        </option>
                    </select>
                </div>
                <div className="new-registration__control">
                    <label>Course Start Date</label>
                    <input
                        type="date"
                        onChange={startDateChangeHandler}
                        value={enteredStartDate}
                        disabled
                    />
                </div>
                <div className="new-registration__actions">
                    <button type="button">Cancel</button>
                    <button type="submit">Register Student</button>
                </div>
            </div>
        </form>
    );
}

export default StudentForm;
