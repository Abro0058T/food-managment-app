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
                        <a className={style.linkColl}>
                        <Link to="dashboard">
                                Dashboard
                        </Link>
                            </a>
                    </div>
                    <div className={style.sideButtons}><MdHistory className={style.icons} />
                        <Link to="history">
                           <a className={style.linkColl}>
                           Histoy
                            </a> 
                           </Link></div>
                    <div className={style.sideButtons}><MdOutlineSettings className={style.icons} />  <Link to="settings">
                      
                    <a className={style.linkColl}>
                        Settings 
                        </a>  
                        </Link></div>
                </div>
                <Outlet />
  </div>
  )
}

export default CollectorDashBoard