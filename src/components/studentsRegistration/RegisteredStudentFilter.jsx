import React from "react";
import "./RegisteredStudentFilter.css";
import Options from "../shared/Options";

function RegisteredStudentFilter({ selected, onChangeFilter, courses }) {
  const dropDownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="registrations-filter">
      <div className="registrations-filter__control">
        <label>Filter by course Name</label>
        <select value={selected} onChange={dropDownChangeHandler}>
          <Options options={courses} />
        </select>
      </div>
    </div>
  );
}

export default RegisteredStudentFilter;
