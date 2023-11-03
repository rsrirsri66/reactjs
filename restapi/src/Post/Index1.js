import { Route, Routes } from "react-router-dom";
import Home1 from "./Home1";
import User1 from "./User1";

function Webpages1(){ 
    return(
        <>
        <Routes>
            <Route path="/" element={<Home1/>}/>
            <Route path="/postuse/:id" element={<User1/>}/>
        </Routes>
        </>
    )
}
export default Webpages1;