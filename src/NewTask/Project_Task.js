import React from 'react';
function Project_Task({ active }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>Project Work</h3>
      <p><b>Title:</b> {active.title}</p>
      <p><b>Description:</b> {active.desc}</p>
    </div>
  );
}
export default Project_Task;
