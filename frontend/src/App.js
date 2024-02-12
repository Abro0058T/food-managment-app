import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
    <TopBar/>
    <div className='dashboard'>

      <SideBar/>
      <Dashboard/>
    </div>
    
    </>
  );
}

export default App;
