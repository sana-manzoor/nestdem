
import './App.css';
import Ediit from './components/Ediit';
import EmployView from './components/EmployView';
import Register from './components/Register';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Register/>} />
        <Route path='/view' element={<EmployView/>} />
        <Route path='/edit' element={<Ediit/>} />


      </Routes>

    </div>
  );
}

export default App;
