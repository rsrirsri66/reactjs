import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Headers from './Textchange';
import Snapshot from './Snapshot';
function App() {
   const student={
    firstname:"Sri",
    lastname:"Shiva",
    email:"rsrirsri66"
  }
  const skill=['HTML', 'CSS', 'JS']
  const myList=['Peter','Sachin','Yuvi','Dhoni'];
  const data=[
    {id:1, title:'first', content:'welcome to Imarticus'},
    {id:2, title:'second' ,content:'It is the best ReactJS '},
    {id:3, title:'third' ,content:'React JS'},
  ] 
  return (
    <div className="App">
   
     <Header favcol="yellow"/> 
     <Headers/>
     <Snapshot/>
  
    
    </div>
  );
}

export default App;
