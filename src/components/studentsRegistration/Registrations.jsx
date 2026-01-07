import React, { useState } from "react";
import "./Registrations.css";
import RegisteredStudentList from "./RegisteredStudentList";
import RegisteredStudentChart from "./RegisteredStudentChart";
import RegisteredStudentFilter from "./RegisteredStudentFilter";

function Registrations({ registeredStudents, courses }) {
  const [filteredCourse, setFilteredCourse] = useState(courses[0]);

  const filteredChangeHandler = (selectedCourseId) => {
    const castedSelectedCourseId = Number(selectedCourseId);
    const foundedCourse = courses.find((course) => {
      return course.id === castedSelectedCourseId;
    });

    setFilteredCourse(foundedCourse);
  };

  const filteredRegisteredStudents = registeredStudents.filter((student) => {
    return student.courseId === filteredCourse.id;
  });

  return (
    <div className="registrations card">
      <RegisteredStudentChart
        registeredStudents={registeredStudents}
        courses={courses}
      />
      <RegisteredStudentFilter
        selected={filteredCourse.id}
        onChangeFilter={filteredChangeHandler}
        courses={courses}
      />
      <RegisteredStudentList
        registeredStudents={filteredRegisteredStudents}
        course={filteredCourse}
      />
    </div>
  );
}

export default Registrations;
