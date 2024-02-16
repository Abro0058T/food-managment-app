import React, { useEffect } from 'react'
import style from './collectorDashboard.module.css'
import Sidebar from './Sidebar'
import CollectorMainBoard from "./CollectorMainBoard.jsx"
import { useDispatch } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import { MdHistory, MdOutlineSettings, MdOutlineSpaceDashboard } from 'react-icons/md'
import { fetchCollectorHistory } from '../../redux/restaurants/restaurantsActions.js'
function CollectorDashBoard() {
    const {id}=useParams();
    console.log(id)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchCollectorHistory(id))
    },[dispatch])
  return (
    <div className={style.app} >
                <div className={style.sideBar}>
                    <div className={style.sideButtons}><MdOutlineSpaceDashboard className={style.icons} />
                        <Link to="dashboard">
                            Dashboard
                        </Link>
                    </div>
                    <div className={style.sideButtons}><MdHistory className={style.icons} />
                        <Link to="history">
                            Histoy</Link></div>
                    <div className={style.sideButtons}><MdOutlineSettings className={style.icons} />  <Link to="settings">
                        Settings </Link></div>
                </div>
                <Outlet />
  </div>
  )
}

export default CollectorDashBoard