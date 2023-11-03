import logo from './logo.svg';
import './App.css';
import ThemeSwitcher1 from './ThemeSwitcher';
import Button from './Button';
import Products from './Products';
import EmployeeForm from './EmployeeForm';
import OffOn from './OfflineOnline';

function App() {
  return (
    <div className="App">
      <ThemeSwitcher1/><br></br>
     <Button/>
     <Products/>
     <EmployeeForm/>
     <OffOn/>
    </div>
  );
}

export default App;
