import {React,useState} from 'react'
import './Accordion.css'
const Accordion=()=>{
    const[open,setOpen]=useState(null)
    //function expand(){
        //setOpen(!open)
    //}
    function handleId(id){
        //console.log(id)
        //setOpen(id)
        setOpen(open === id ? null:id)
    }
    const accor=[
        {id:1,title:"acc1",para:"para1"},
        {id:2,title:"acc2",para:"para2"}
    ]
    return(
        <>{
            accor.map((res)=>{
                return(
                    <>
                    <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                    {open == res.id ? <p>{res.para}</p>:""}

                    </>

            )
            })
        }
       
        </>
    )
}
export default Accordion