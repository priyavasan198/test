import {React,useState} from 'react';
const Acc=()=>{
    const [open,setOpen]=useState();

    const accor=[{id:1,title:"acc1",para:"para1"},
                {id:2,title:"acc2",para:"para2"}]
    
    function handleId(id){
        setOpen(id);
    }

    return(
        <>{
        accor.map((res)=>{
            return(<>
                <p onClick={()=>handleId(res.id)}>{res.title}</p>
                {open == res.id?<p>{res.para}</p>:" "}
       </>
            )
        })}
       </>  
    )
}
export default Acc;


import {React,useState} from 'react';
const Acc=()=>{
    const [open,setOpen]=useState(null)
    const accor=[{id:1,title:"a1",para:"p1"},
        {id:2,title:"a2",para:"p2"}
    ]
    const handleId
    return(
        <>
        acc.map((res)=>{
            return(
                <><p onClick={}>{res.title}</p>
                </>
            )
        })
        </>
    )
}
export default Acc;