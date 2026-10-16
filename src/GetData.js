import {React,useState,useEffect} from 'react'
import axios from 'axios'
const GetData = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
     axios.get("https://dummyjson.com/c/be47-a372-4693-836a")
    .then((res)=>{setData(res.data)})
    },[])
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>id</th>
            </tr>
        </thead>
    {data.map((i)=>{
    return(<>
    <tbody>
        <tr>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td>{i.id}</td>
        </tr>
    </tbody>
    </>
    )
   })} </table>
</>
  )
}

export default GetData