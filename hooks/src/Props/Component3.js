import React, { useState } from "react";
import Component4 from "./Component4";

function Component3({user}){ 

    return(
        <>
        <h1>Component3</h1>
        <Component4 user={user} />
        </>
    )
}
export default Component3;