import React from 'react';
function Login_Task({ list, active, setActive }) {
  
  function change(e) {
    let index = e.target.value;
    setActive(list[index]);
  }

  return (
    <div>
      <p>Current User: <b>{active.name}</b></p>
      
      <label>Switch Account: </label>
      <select onChange={change}>
        <option value="0">Priya</option>
        <option value="1">Prithiv</option>
      </select>
    </div>
  );
}
export default Login_Task;
