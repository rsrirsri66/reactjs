import logo from './logo.svg';
import './App.css';
import Sample1 from './Usestate/Usestate';
import Car from './Usestate/Usestate2';
import Car1 from './Usestate/Car';
import Timer from './Timer';
import Rtimer from './Reversetimer';
import Mouse_event from './MouseEvent';
import CheckBox from './Checkbox';
import { useState } from 'react';
import Checklist from './Checklist';
import Timerr from './Useeffect';
import Counter from './Counter';
import Component1 from './Props/Component1';
import Reference from './useRef/Reference';
import { Application } from './useContext/Application';
import Application1 from './useContext/Application1';
import Counter1 from './Usestate/Counter';
import Useref from './useRef/Useref'
import Image1 from './img/Image';
import { Todo_check } from './usecallback/Todo_check';
import Todos from './usecallback/Todos';
import Tableform from './Table/Tableform';
import Form from './FormCreating/Form';

function App() {
  const Checkboxes = ['JAVA', 'React js','Gift','MongoDB']
  const [checkedState, setCheckedState]=useState(
    new Array(Checkboxes.length).fill(false)
  );
  const handlecheckboxchange =(index)=>{
    const updatedCheckedState= checkedState.map((item, idx)=>
      idx === index ?  !item : item
    )
    setCheckedState(updatedCheckedState);
  }
   const countCheckedCheckboxes=()=>{
    return checkedState.filter(Boolean).length;
   };
  return (
    <div className="App">
      <Application/>
      <Application1/>
        <Image1/>
   {/* <Sample1/>
    
     
    <Timer/>
    <Rtimer/>
    <Mouse_event/>  */}
    <Car1/>
    <Car/>
    
 <h1>Select the course you want to learn</h1>
    <CheckBox CheckBoxes={Checkboxes}/>
    <h1>select the course</h1>
    <Checklist
     checkboxes={Checkboxes}
     checkedState={checkedState}
     handlecheckboxchange={handlecheckboxchange}
     />
     <p>
      Number of checked checkboxes:
      <strong>{countCheckedCheckboxes()}</strong>
     </p>
     {/* <Timerr/>
     <Counter/>
   
     <Reference/>
     
     
     <Useref />
     <Counter1/>
     <Todo_check/> */}

      <Tableform/> 
     <Form/>    
     <Component1/>
    </div>
  );
}

export default App;
