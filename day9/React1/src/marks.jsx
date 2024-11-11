// marks.jsx
import React from 'react';
import './marks.css'; // Ensure correct relative path to the CSS file

const Marks = ({m1 , m2 , m3 , m4 , m5 , m6}) => {
  return (
    <div className="marks-container">
      <h1>Semester Wise Marks</h1>
      <h2>Semester 1: {m1}</h2>
      <h2>Semester 2: {m2}</h2>
      <h2>Semester 3: {m3}</h2>
      <h2>Semester 4: {m4}</h2>
      <h2>Semester 5: {m5}</h2>
      <h2>Semester 6: {m6}</h2>
    </div>
  );
};

export default Marks;