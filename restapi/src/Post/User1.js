import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function User1(){
const {id}=useParams();

const[error, setError]=useState("");
const[isLoaded,setIsLoaded]= useState(true);
  const[postuse,setUsers]= useState([]);

  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/posts/"+id )
    .then(res => res.json())
    .then(
        (data)=>{
            setUsers(data);
            setIsLoaded(true);
        },
        (error)=>{
            setIsLoaded(true)
            setError(error);
        }
    )
  },[])
    return(
        <>
        <h1>title:{postuse.title}</h1>
        <h1>ID: {id}</h1>
        <h1>Bodt: {postuse.body}</h1>
        </>
    )
    return(
        <>
         <h1>Welcome</h1>
         
     </>)
  
}
export default User1;