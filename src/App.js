import { useState } from "react";
import "./App.css";
import NewStudent from "./components/newStudent/NewStudent";
import Registrations from "./components/studentsRegistration/Registrations";

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

const DUMMY_COURSES = {
    fullstack: {
        id: 1,
        name: "fullstack",
        displayName: "Fullstack course",
        startDate: new Date(2024, 6, 1),
    },
    qa: {
        id: 2,
        name: "qa",
        displayName: "QA course",
        startDate: new Date(2025, 3, 1),
    },
    cyber: {
        id: 3,
        name: "cyber",
        displayName: "Cyber course",
        startDate: new Date(2026, 3, 1),
    },
    product: {
        id: 4,
        name: "product",
        displayName: "Product Manager course",
        startDate: new Date(2025, 2, 23),
    },
};

function App() {
    const [registeredStudents, setRegisteredStudents] = useState(DUMMY_DATA);

    const addStudentHandler = (student) => {
        setRegisteredStudents((prevStudents) => {
            return [...prevStudents, student];
        });
    };

    return (
        <div className="App">
            <NewStudent
                onRegisteredNewStudent={addStudentHandler}
                courses={DUMMY_COURSES}
            />
            <Registrations
                registeredStudents={registeredStudents}
                courses={DUMMY_COURSES}
            />
        </div>
    );
}

export default App;
