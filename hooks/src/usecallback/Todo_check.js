import { useState,useCallback } from "react";
import Todos from "./Todos";

export const Todo_check =()=>
{
    const [count,setcount]=useState(0);
    const[todos,setTodos]=useState([]);

    const increament =()=>
    {
        setcount((c)=>c+1);
    };
    const addTodo = useCallback(()=>
    {
        setTodos((t)=>[...t,"New Todo"]);
    },[todos])

    return(
        <>
        <Todos todos={todos} addTodo={addTodo}></Todos>
        <hr></hr>
        <div>
            Count:{count}
            <button onClick={increament}>+</button>
        </div>
        </>
    )
}