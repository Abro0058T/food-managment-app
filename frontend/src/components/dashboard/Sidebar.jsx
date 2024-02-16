import React from 'react';
import style from './collectorDashboard.module.css'
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>
          <button> <Link to="/dashboard">

Dashboard
</Link>
</button>
        </li>
        <li>
          <button>History</button>
        </li>
        <li>
          <button>Leaderboard</button>
        </li>
        <li>
          <button>Map</button>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default Sidebar;
