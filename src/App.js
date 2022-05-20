import logo from './logo.svg';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Signup/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/Auth/RequireAuth';
import Dashboard from './Components/Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portfolio' element={<Portfolio></Portfolio>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route element={<RequireAuth/>} >
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
        </Routes>
        
        <ToastContainer/>
      </Header>

    </div>
  );
}

export default App;
