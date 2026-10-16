import {React,useState,useEffect} from 'react'

const Counter=()=> {
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
   
    function timeout(){       //to set the delay with the time gn 
        setTimeout(() => {
          console.log("test")  
        },1000);
        
    }
    function interval(){     //to run it repeatedly with the time gn
        setInterval(()=>{
            console.log("interval")
        },1000)
        }
    
  return (
    <div>
       <h1> Counter:{count}</h1>
       <button onClick={()=>setCount(count+1)}>Inc</button>
        <button onClick={()=>setCount(count-1)}>Dec</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount1(count1 + 1)}>others</button>
        <button onClick={timeout}>time</button>
        <button onClick={interval}>interval</button>
        </div>
  )
}

export default Counter