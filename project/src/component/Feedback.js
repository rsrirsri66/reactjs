//table
import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
class Table extends Component{
    render(){
        const data=[{
            name:"Ayaan",
            age:23
        },{
            name:"Yuvi",
            age:39
        },{
            name:"Dhoni",
            age:40
        },{
            name:"Virat",
            age:36
        },{
            name:"Rohit",
            age:37
        }]
        const columns=[{
            Header:'Employee Name',
            accessor:'name'
        },{
            Header:'Employee Age',
            accessor:'age'
        }]
        return(
            <div>
                <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6]}
                />
            </div>
        )
    }
}
export default Table;