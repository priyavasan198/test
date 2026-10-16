import {React,useState,useEffect} from "react"
import axios from "axios"
import StudentList from "./StudentList"
function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputName, setInputName] = useState("")
  const [inputUsername, setInputUsername] = useState("")
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setStudents(response.data);
        setLoading(false); 
      })
  }, [])
  const handleAddStudent = (e) => {
    e.preventDefault()
    if (inputName === "" || inputUsername === "") {
      alert("Both fields are required!");
      return
    }
    const newStudent = {
      id: Date.now(),
      name: inputName,
      username: inputUsername,
      email: "newuser@example.com",
      address: { city: "New City" },
    }
    setStudents([newStudent, ...students])
    setInputName("")
    setInputUsername("")
  }

  return (
    <div style={{ padding:"20px", background:"lightpink",fontFamily:"sans-serif", color:"darkviolet" }}>
      <h1 style={{color:"blue"}}>User Directory</h1>
      <form onSubmit={handleAddStudent} style={{ marginBottom: "20px" }}>
        <h3>Add New Student</h3>
        <input 
          type="text" 
          value={inputName} 
          onChange={(e) => setInputName(e.target.value)} 
        />
        <input 
          type="text" 
          value={inputUsername} 
          onChange={(e) => setInputUsername(e.target.value)} 
          style={{marginLeft:"10px"}}
        />
        <button type="submit" style={{marginLeft:"10px",color:"red"}}>Add</button>
      </form>
      {loading ? <p>Loading users...</p> : <StudentList students={students} />}
    </div>
  )
}

export default App
