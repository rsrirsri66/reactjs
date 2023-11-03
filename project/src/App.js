import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Ticketreservation from './component/Ticketreservation';
import Table from './component/Feedback';

function App() {
  return (
    <div >
     <Login />
     <Register />
     <Ticketreservation />
     <Table/>
    </div>
  );
}

export default App;
