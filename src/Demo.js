import React, { useState } from 'react';
import axios from 'axios';
function Second() {
  const [theme, setTheme] = useState("light");
  const [birthYear, setBirthYear] = useState("");
  const [ageResult, setAgeResult] = useState("");
  //const [randomNumber, setRandomNumber] = useState("");
  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  function handleAge() {
    setAgeResult(2026 - birthYear);
  }
  
//   function handleRandom() {
//     setRandomNumber(birthYear * 23);
//   }
return (
    <div style={{backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white"}}>
    <h1>My Task App</h1>
      <p>Current Mode: {theme}</p>
      <div style={{backgroundColor: theme === "light" ? "white" : "black" }}>
        <h2>Theme Changer</h2>
        <button onClick={handleTheme} 
          style={{backgroundColor: theme === "light" ? "white" : "black",color: theme === "light" ? "black" : "white"}}>
          Switch Mode
        </button>
      </div>
      <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
        <h2>Age Calculator</h2>
        <label>Enter Birth Year: </label>
        <input type="number" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
        <button onClick={handleAge}>Find Age</button>
        {ageResult !== "" && (<p>You are {ageResult} years old!</p>)}
      </div>
      {/* <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
        <h2>5-Digit Number Generator</h2>
        <p>Type your birth year in Section 2 first, then click below:</p>
        <button onClick={handleRandom}>Generate Number</button>
        {randomNumber !== "" && (
          <h3>Number: {randomNumber}</h3>
        )}
      </div> */}
</div>
  );
}

export default Second;
