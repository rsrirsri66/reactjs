import React, { useState } from "react";
import Component5 from "./Component5";

function Component4({user}){ 

    return(
        <>
        <h1>Component4</h1>
        <Component5 user={user} />
        </>
    )
}
export default Component4;