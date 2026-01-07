import React from "react";
import "./CourseDate.css";

function CourseDate({ date }) {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const formattedDate = `${day} / ${month} / ${year}`;

  return (
    <div className="registration-date">
      <div>{formattedDate}</div>
    </div>
  );
}

export default CourseDate;
