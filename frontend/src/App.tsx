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
import CollectorSiginin from './components/login-signin/CollectorSigninn';
import CollectorDashBoard from './components/dashboard/CollectorDashBoard.jsx'
import CollectorHistory from "./components/dashboard/CollectorHistory.jsx"
import CollectorMainBoard from "./components/dashboard/CollectorMainBoard.jsx"
function App() {
  return (
    <>
    <Provider store={store}>

<BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>

        <Route path="/collector/signin" element={<CollectorSiginin/>}/>
        <Route path="/collector/:id" element={<CollectorDashBoard/>}>
        <Route path='history' element={<CollectorHistory />} /> 
        <Route path='dashboard' element={<CollectorMainBoard />} /> 

        </Route>
          <Route path="/restaurant/:id" element={<Restaurant />} >
          <Route path='dashboard' element={<Dashboard />} /> 
          <Route path='settings' element={<Settings />} /> 
          <Route path='history' element={<History />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    {/* <Login/> */}

    </>
  );
}

export default App;

// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         hello
// </div>
//     </>
//   )
// }

// export default App

