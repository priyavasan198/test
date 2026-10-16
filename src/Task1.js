import React, { useState } from "react";
import "./Task1.css";

export default function Task1() {
  
  const [students, setStudents] = useState([]);
  const [formState, setFormState] = useState({ name: "", age: "", course: "" });
  const [showOnlyAdults, setShowOnlyAdults] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null); // Modal opens if not null
  const [counter, setCounter] = useState(0);

 
  function handleInputChange(event) {
    
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (fieldName === "name") {
      setFormState({ name: fieldValue, age: formState.age, course: formState.course });
    }
    if (fieldName === "age") {
      setFormState({ name: formState.name, age: fieldValue, course: formState.course });
    }
    if (fieldName === "course") {
      setFormState({ name: formState.name, age: formState.age, course: fieldValue });
    }
  }

 
  function handleAddStudent(event) {
    event.preventDefault();
    if (formState.name === "" || formState.age === "" || formState.course === "") {
      return; 
    }

    const newStudent = {
      id: Date.now(),
      name: formState.name,
      age: Number(formState.age),
      course: formState.course
    };

    setStudents(students.concat(newStudent));
    setFormState({ name: "", age: "", course: "" }); 
  }

  function confirmDelete() {
    const updated = students.filter(function (s) {
      return s.id !== studentToDelete.id;
    });
    setStudents(updated);
    setStudentToDelete(null); 
  }

  let studentsToDisplay = students;
  if (showOnlyAdults === true) {
    studentsToDisplay = students.filter(function (s) {
      return s.age >= 18;
    });
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      
      
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>

      <div>
        <button onClick={() => setIsAccordionOpen(!isAccordionOpen)}>What is React?</button>
        {isAccordionOpen === true && <p>React is a simple JavaScript library for building user interfaces.</p>}
      </div>

     
      <div>
        <h3>Counter: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>−</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>

      <form onSubmit={handleAddStudent}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formState.name} 
          onChange={handleInputChange} 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={formState.age} 
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="course" 
          placeholder="Course" 
          value={formState.course} 
          onChange={handleInputChange} 
        />
        <button type="submit">Add Student</button>
      </form>

     
      <div>
        <input 
          type="checkbox" 
          checked={showOnlyAdults} 
          onChange={(e) => setShowOnlyAdults(e.target.checked)} 
        />
        Show Students 18 or Above Only
      </div>

      <ul>
        {studentsToDisplay.map(function (student) {
          return (
            <li key={student.id}>
              {student.name} ({student.age} yrs) - {student.course}
             
              <button onClick={() => setStudentToDelete(student)}>Delete</button>
            </li>
          );
        })}
      </ul>

      {studentToDelete !== null && (
        <div className="modal-box">
          <p>Are you sure?</p>
          <button onClick={confirmDelete}>Delete</button>
          <button onClick={() => setStudentToDelete(null)}>Cancel</button>
        </div>
      )}

    </div>
  );
}
