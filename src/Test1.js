import React, { useState } from "react";
import './Model.css'
const Test1=()=>{
  const [value,setValue]=useState(0)
  const [open,setOpen]=useState(null)
  const [Model,setModel]=useState(false)
  const accor=[{id:1,title:"how to use", para:"the following steps are mentioned based on how to use"}]
  function inc(){
    setValue(!value)
  }
  
       function handleId(id){
        //console.log(id)
        //setOpen(id)
        setOpen(open === id ? null:id)
    }
  
  return(
    <>
    <div style={{backgroundColor: value? "white":"black" , height:"100vh"}}>
    
    <button onClick={inc}>{value?"sun":"moon"}</button>
   
    {accor.map((res)=>{
    return(
        <>
        <p onClick={()=>handleId(res.id)}>{res.title}</p>
                    {open == res.id ? <p>{res.para}</p>:""}
 
        </>
    )
})}
      {Model ? <div className='model'>
        <span>Continue?</span>
        <button onClick={()=>setModel(false)}>OK</button>
        </div>:""}
        <button onClick={()=>setModel(true)}>Delete</button>
        <div>
            
            
        </div>
     </div>
 
    </>
  )
}
export default Test1;