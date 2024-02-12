import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import Dashboard from './components/dashboard/Dashboard';
import Restaurant from './components/screens/Restaurant';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login-signin/Login';
import History from './components/screens/History';
import Settings from './components/screens/Settings';
import Signin from './components/login-signin/Signin';

function App() {
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sigin" element={<Signin/>}/>

          <Route path="/restaurant/:id" element={<Restaurant />} >
          <Route path='dashboard' element={<Dashboard />} /> 
          <Route path='settings' element={<Settings />} /> 
          <Route path='history' element={<History />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
