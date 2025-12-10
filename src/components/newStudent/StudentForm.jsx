import React, { useState } from "react";
import "./StudentForm.css";
import dateFormatting from "../../utils/dateUtils";

function StudentForm(props) {
    const [enteredStudentName, setEnteredStudentName] = useState("");
    const [enteredStudentCourse, setEnteredStudentCourse] = useState("");
    const [enteredStartDate, setEnteredStartDate] = useState("");

    const studentNameChangeHandler = (event) => {
        setEnteredStudentName(event.target.value);
    };

    const studentCourseChangeHandler = (event) => {
        setEnteredStudentCourse(event.target.value);

        const formattedDate = dateFormatting(
            props.courses[event.target.value].startDate
        );
        setEnteredStartDate(formattedDate);
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
        props.onCancel();
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
                    <input type="date" value={enteredStartDate} disabled />
                </div>
                <div className="new-registration__actions">
                    <button type="button" onClick={props.onCancel}>
                        Cancel
                    </button>
                    <button type="submit">Register Student</button>
                </div>
            </div>
        </form>
    );
}

export default StudentForm;
