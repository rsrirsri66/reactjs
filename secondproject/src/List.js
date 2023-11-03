import React from "react";
const myList=['Peter','Sachin','Yuvi','Dhoni'];
const ListItems=myList.map((myList)=>{
    return<li>{myList}</li>;
})
class List extends React.Component{
    render(){
        return(
            <div>
                <ul>{ListItems}</ul>
            </div>
        )
    }
}
export default List;