import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './redux/store';
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
    <Provider store={store}>

<BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>

          <Route path="/restaurant/:id" element={<Restaurant />} >
          <Route path='dashboard' element={<Dashboard />} /> 
          <Route path='settings' element={<Settings />} /> 
          <Route path='history' element={<History />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
