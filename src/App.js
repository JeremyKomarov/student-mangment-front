import { useState } from "react";
import "./App.css";
import NewStudent from "./components/newStudent/NewStudent";
import RegisteredStudent from "./components/studentsRegistration/RegisteredStudent";

const DUMMY_DATA = [
    {
        id: "1",
        studentName: "John Doe",
        course: "fullstack",
    },
    {
        id: "2",
        studentName: "Eli Finish",
        course: "qa",
    },
    {
        id: "3",
        studentName: "David Doe",
        course: "fullstack",
    },
    {
        id: "4",
        studentName: "Jeremy Finish",
        course: "qa",
    },
];

const DUMMY_COURSES = [
    { id: "1", course: "fullstack", startDate: new Date(2023, 7, 14) },
    { id: "2", course: "qa", startDate: new Date(2025, 2, 20) },
];

function App() {
    const [registeredStudents, setRegisteredStudents] = useState(DUMMY_DATA);

    const addStudentHandler = (student) => {
        setRegisteredStudents((prevStudents) => {
            return [student, ...prevStudents];
        });
    };

    console.log(registeredStudents);

    return (
        <div className="App">
            <NewStudent onRegisteredNewStudent={addStudentHandler} />
            {registeredStudents.map((student) => {
                return (
                    <RegisteredStudent
                        registeredStudent={student}
                        // course={student.course}
                    />
                );
            })}
        </div>
    );
}

export default App;
