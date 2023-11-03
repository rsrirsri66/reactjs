import React from "react";

function MenuBlog(props){
    const titlebar=(
        <ol>
            {props.data.map((show)=>
            <li key={show.id}>
                {show.title}
                </li>
                )}
        </ol>
    )
    const content=props.data.map((show)=>
    <div>
        <h3>{show.title}:{show.content}</h3>
    </div>
    
    )
    return(
        <div>
            {titlebar}
            <hr/>
            {content}
        </div>
    )
}
export default MenuBlog