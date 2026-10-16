import React, { useState } from "react";
import "./Test.css";

export default function Test() {
 
  const [tasks, setTasks] = useState([]); 
  const [formState, setFormState] = useState({ title: "" }); 
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); 
  const [taskToDelete, setTaskToDelete] = useState(null); 

  
  function handleInputChange(event) {
    setFormState({ title: event.target.value });
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (formState.title === "") return;

    const newTask = {
      id: Date.now(),
      title: formState.title,
      isCompleted: false
    };

    setTasks(tasks.concat(newTask));
    setFormState({ title: "" });
  }

  
  function toggleTaskStatus(id) {
    const updated = tasks.map(function(t) {
      if (t.id === id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTasks(updated);
  }

  function confirmDelete() {
    const updated = tasks.filter(function(t) {
      return t.id !== taskToDelete.id;
    });
    setTasks(updated);
    setTaskToDelete(null); 
  }

  let tasksToDisplay = tasks;
  if (showOnlyCompleted === true) {
    tasksToDisplay = tasks.filter(function(t) {
      return t.isCompleted === true;
    });
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      
     
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>

      
      <div>
        <button onClick={() => setIsAccordionOpen(!isAccordionOpen)}>How to use</button>
        {isAccordionOpen && <p>Type a task, click add, click complete/delete to manage!</p>}
      </div>

    
      <form onSubmit={handleAddTask}>
        <input type="text" value={formState.title} onChange={handleInputChange} />
        <button type="submit">Add Task</button>
      </form>

     
      <div>
        <input 
          type="checkbox" 
          checked={showOnlyCompleted} 
          onChange={(e) => setShowOnlyCompleted(e.target.checked)} 
        />
        Show Completed
        <span> | Total: {tasks.length}</span>
      </div>

      
      <ul>
        {tasksToDisplay.map(function(task) {
          return (
            <li key={task.id} style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}>
              {task.title}
              
              <button onClick={() => toggleTaskStatus(task.id)}>Status</button>
              
              <button onClick={() => setTaskToDelete(task)}>Delete</button>
            </li>
          );
        })}
      </ul>

     
      {taskToDelete !== null && (
        <div className="modal">
          <p>Delete "{taskToDelete.title}"?</p>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={() => setTaskToDelete(null)}>No</button>
        </div>
      )}

    </div>
  );
}
