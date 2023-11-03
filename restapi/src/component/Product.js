import { useContext } from "react"
import { MyContext } from "./MyContext"
function Product()
{
    const { text,settext }=useContext(MyContext)

   return(
    <>
    <h1>{text}</h1>
    <button onClick={()=>settext("Pro details")}>Click ME</button>
    </>
   )
}
export default Product;