import React, { useState } from "react";
import "./StudentForm.css";
import { dateFormatting } from "../../utils/utils";
import Options from "../shared/Options";

function StudentForm({ courses, onSaveRegisteredStudentData, onCancel }) {
  const [enteredStudentName, setEnteredStudentName] = useState("");
  const [enteredStudentCourseId, setEnteredStudentCourseId] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");

  const studentNameChangeHandler = (event) => {
    setEnteredStudentName(event.target.value);
  };

  const studentCourseChangeHandler = (event) => {
    const castedSelectedCourseId = Number(event.target.value);
    const foundedCourse = courses.find((course) => {
      return course.id === castedSelectedCourseId;
    });

    setEnteredStudentCourseId(castedSelectedCourseId);
    const formattedDate = dateFormatting(foundedCourse.startDate);
    setEnteredStartDate(formattedDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const studentData = {
      studentName: enteredStudentName,
      courseId: enteredStudentCourseId,
    };

    onSaveRegisteredStudentData(studentData);

    setEnteredStudentName("");
    setEnteredStudentCourseId("");
    setEnteredStartDate("");
    onCancel();
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
            value={enteredStudentCourseId}
            required
          >
            <option value="" disabled>
              Please Choose A Course
            </option>
            <Options options={courses} />
          </select>
        </div>
        <div className="new-registration__control">
          <label>Course Start Date</label>
          <input type="date" value={enteredStartDate} disabled />
        </div>
        <div className="new-registration__actions">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Register Student</button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
