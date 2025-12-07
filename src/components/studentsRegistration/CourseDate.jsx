import React from "react";
import "./CourseDate.css";

function CourseDate(props) {
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();

    const formattedDate = `${day} / ${month} / ${year}`;

    return (
        <div className="registration-date">
            <div>{formattedDate}</div>
        </div>
    );
}

export default CourseDate;
