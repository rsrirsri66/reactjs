import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home1(){
    const [error,setError]=useState(null);
    const [isLoaded,setIsLoaded]=useState(false);
const [post,setPosts]=useState([]);
     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(
            (data)=>{
                setIsLoaded(true);
                setPosts(data);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error)
            }
          )
         },[] )
         if(error){
            return<div>Error: {error.message}</div>
         }
         else if(!isLoaded){
            return<div>Loading......</div>
             
         }
     else{
     return(
        <>
        <ul>
        {post.map(postuse=>(
            <li>
                <Link to={`postuse/${postuse.id}`}>{postuse.title}</Link>
            </li>
        ))}
        </ul>
        </>
     )}
}
export default Home1;