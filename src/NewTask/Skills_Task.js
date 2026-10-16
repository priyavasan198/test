import React from 'react';
function Skills_Task({ active }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>Skills</h3>
      <p>{active.skills}</p>
    </div>
  );
}
export default Skills_Task;
