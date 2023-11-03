import React, { useState } from "react";

function Fun(){
    const[use,setuse]=useState({
        test:"Nill",
        question: "0",
        students: "0"

    })
    function hendleevent(){
        setuse({
            test: "start",
            question: "10",
            students: "32"
        })
    }
    return(
        <>
         <h1>Exam</h1>
         <h2>TEST={use.test}</h2>
         <h2>Question={use.question}</h2>
         <h2>Students= {use.students}</h2>

         <button onClick={hendleevent}>Submit</button>
        </>
    )
}
export default Fun;