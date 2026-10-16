import {React,useState} from "react";
function ErrorHandling({data}){
    console.log(data)
    const [value,setValue]=useState(
        {name:"",email:"",number:""})
    const [error,setError]=useState(
        {nameError:"",emailError:"",numberError:""})
        function change(e){
            setValue(
                {
                    ...value,
                [e.target.name]:e.target.value
                }
            )
        }
        
    function handleSubmit(e){
        e.preventDefault();
        if(value.name==""){
            //console.log("field is empty");
            setError({
               ...error,
               nameError:"Field is required",
               
            })
        }
        else if(value.name.length<3){
            //alert("name is in less than 3")
            setError({
                ...error,
                nameError:"name is in less than 3"
            })
        }
        else{}
    }
    return(<>
    <form onSubmit={handleSubmit}>
        name<input type="text" name="name" onChange={change} /><br/>
     <span style={{color:"red"}}> {error.nameError}</span><br/> 
        email<input type="email" name="email" onChange={change}/><br/>
        
        number<input type="number" name="number"/><br/>
        <button type="submit">Submit </button>
    </form>
    </>
    )
}
export default ErrorHandling                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    