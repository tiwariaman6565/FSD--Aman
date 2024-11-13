// marks.jsx
import React from 'react';
import './marks.css'; // Ensure correct relative path to the CSS file

const Marks = ({name , roll , m1 , m2 , m3 , m4}) => {
  return (
    <div className="marks-container">
      <h1>Student Profile</h1>
      <h2>Name</h2>
      <h2>Roll No</h2>
      <br />
      <h1>Semester Wise Marks</h1>
      <h2>Semester 1: {m1}</h2>
      <h2>Semester 2: {m2}</h2>
      <h2>Semester 3: {m3}</h2>
      <h2>Semester 4: {m4}</h2>
    </div>
  );
};

export default Marks;