import React from 'react';
function About_Task({active}) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>About Profile</h3>
      <p>{active.about}</p>

      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{active.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{active.email}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{active.place}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default About_Task;
