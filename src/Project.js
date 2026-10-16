import {React,useState} from 'react'
import './Project.css'
const Project=()=>{
    const [value,setValue]=useState(0);
    const [input,setInput]=useState("visible");
    const [email,setEmail]=useState();
    const [age,setAge]=useState();
    function inc(){
      setValue(!value)
    }
    function data(e){
        setInput(e.target.value);
    }
    function ager(e){
      setAge(e.target.value);
    }
    function emaily(e){
      setEmail(e.target.value);
     
    }
    function handleSubmit(e){
      e.preventDefault();
      alert(input)
      alert(email)
      alert(age)
    }
    return(
        <div style={{backgroundColor: value? "white":"black" , height:"100vh"}}>
        <toggle onClick={(inc)}>{value ? "🌞" : "🌙"}</toggle>
        <form onSubmit={handleSubmit}>
            name<input onChange={data} /><br/>
            email<input onChange={emaily}/><br/>
            age<input onChange={ager}/><br/>
            <button type="submit">Submit</button>
            
        </form>
     
        </div>
    )
}
export default Project;
