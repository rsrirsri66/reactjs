import { useContext } from "react"
import { MyContext } from "./MyContext"
function MyComponent()
{
    const { text,settext }=useContext(MyContext)

   return(
    <>
    <h1>{text}</h1>
    <button onClick={()=>settext("Hello All")}>Click ME</button>
    </>
   )
}
export default MyComponent;