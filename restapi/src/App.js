import logo from './logo.svg';
import './App.css';
import {MyContext} from "./component/MyContext"
import MyComponent from './component/MyComponent';
import { useState } from 'react';
import Product from './component/Product';
import Webpages from './WebPages/Index';
import Webpages1 from './Post/Index1';

function App() {
  const [ text,settext ]=useState("Imarticus")
  return (
    <div >
     {/* <MyContext.Provider value ={{text, settext}}>
      <MyComponent/>
      <Product/>
     </MyContext.Provider> */}
     {/* <Webpages/>  */}
     <Webpages1/>
    </div>
  );
}

export default App;
