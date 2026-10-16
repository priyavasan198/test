import {React,useState} from 'react'
import './Model.css'
function Modelbox() {
    const [Model,setModel]=useState(false)
  return (
  <>
    <div>Modelbox</div>
    {Model ? <div className='model'>
        <span>Continue?</span>
        <button onClick={()=>setModel(false)}>OK</button>
        </div>:""}
        <button onClick={()=>setModel(true)}>Confirm</button>
        <div>
            
            
        </div>

        </>
  )
}
export default Modelbox