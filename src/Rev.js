import {React,useState} from 'react'
const Rev=()=>{
    const [form,setForm]=useState({
        id:0,name:"",age:0
    });
    const [value,setValue]=useState({id:1,name:"prithiv",age:12})
    function change(e){
        setValue({
            ...value,
            [e.target.name]:e.target.value
            
        })
    }
    // function next(e){
    //     setValue({
    //         ...value,
    //         age:e.target.value
    //     })
    // }
    
    function submit(e){
        e.preventDefault();
        setForm({
            ...form,
            name:value.name,
            age:value.age
        })
    }
    return(
        <>
        <div>
        {form.name}<br/>
        {form.age}
        
        <form onSubmit={submit}>
            name<input onChange={change} name={"name"}></input>
            age<input onChange={change} name={"age"}></input>
        
        <button type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}
export default Rev;