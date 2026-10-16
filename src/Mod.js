import {React,useState} from 'react';
const Mod=()=>{
    const [open,setOpen]=useState(false);
    return(
        <>
        {open ?<div> <span>Continue</span>
        <button onClick={()=>setOpen(false)}>Ok</button></div>:""}
        <button onClick={()=>setOpen(true)}>Confirm</button>
        </>
    )

}
export default Mod;