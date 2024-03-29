import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Location from './Location';
import { Link, Route,Routes } from 'react-router-dom';
import Found from './Find';


function App() {
  return (
    <div >
    <nav>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Contact">Contact</Link> 
        </li>
        <li>
        <Link to="/Location">Place</Link> 
        </li>
        <li>
        <Link to="/Found">find</Link> 
        </li>
      </ul>
    </nav>
     <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Location' element={<Location/>}/>
      <Route path='/found' element={<Found/>}/>
     </Routes>
    </div>
  );
}

export default App;
