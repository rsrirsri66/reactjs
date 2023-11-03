
import React, { useState } from "react";
import {Table} from "react-bootstrap";
import AlertBox from "./AlertBox";

function Tableform(){
    const [name,setname]= useState("React Table Example");
    return(
        <>
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    {name}
                </tr>
                <tr>
                    <th>#</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>UserName</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sri</td>
                    <td>Jacob</td>
                    <td>@thor</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>john</td>
                    <td>cena</td>
                    <td>@jC</td>
                </tr>
                <tr>
                <td>3</td>
                    <td>Fohn</td>
                    <td>aena</td>
                    <td>@jaaC</td>
                </tr>
            </tbody>
        </Table>
        <AlertBox></AlertBox>
        </>
    )
}
export default Tableform;