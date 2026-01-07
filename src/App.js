import { useEffect, useState } from "react";
import "./App.css";
import NewStudent from "./components/newStudent/NewStudent";
import Registrations from "./components/studentsRegistration/Registrations";
import { getAllCourses, getAllStudents, createStudent } from "./services/api";
import {
  normalizeCourseName,
  normalizeCourseDate,
  normalizeStudentFullName,
} from "./utils/utils";

function App() {
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    getAllCourses().then((res) => {
      const courses = res.data.map((course) => {
        const formattedDate = normalizeCourseDate(course.startDate);
        const formattedCourseName = normalizeCourseName(course.name);
        return {
          ...course,
          startDate: formattedDate,
          displayName: formattedCourseName,
        };
      });
      getAllStudents().then((res) => {
        const students = res.data.map((student) => {
          const fullName = normalizeStudentFullName(
            student.firstName,
            student.lastName
          );
          return {
            ...student,
            studentName: fullName,
          };
        });
        setAvailableCourses(courses);
        setRegisteredStudents(students);
      });
    });
  }, []);

  const addStudentHandler = (student) => {
    const splittedStudentName = student.studentName.split(" ");
    const studentToCreate = {
      firstName: splittedStudentName[0],
      lastName: splittedStudentName[1],
      courseId: student.courseId,
    };

    createStudent(studentToCreate)
      .then((res) => {
        console.log("Create new student " + res.data);
        getAllStudents().then((res) => {
          const students = res.data.map((student) => {
            const fullName = normalizeStudentFullName(
              student.firstName,
              student.lastName
            );
            return {
              ...student,
              studentName: fullName,
            };
          });
          setRegisteredStudents(students);
        });
      })
      .catch((err) => {
        console.log("didnt create student");
      });
  };

  return (
    <div className="App">
      {availableCourses.length === 0 ? (
        "Loading"
      ) : (
        <div>
          <NewStudent
            onRegisteredNewStudent={addStudentHandler}
            courses={availableCourses}
          />
          <Registrations
            registeredStudents={registeredStudents}
            courses={availableCourses}
          />
        </div>
      )}
    </div>
  );
}

export default App;
