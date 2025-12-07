import "./App.css";
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
    return (
        <div className="App">
            <RegisteredStudent
                registeredStudent={DUMMY_DATA[0]}
                course={DUMMY_COURSES[0]}
            />
            {/* <RegisteredStudent
                registeredStudent={DUMMY_DATA[1]}
                course={DUMMY_COURSES[1]}
            /> */}
        </div>
    );
}

export default App;
