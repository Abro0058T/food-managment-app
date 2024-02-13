import React, { useEffect, useState } from 'react'
import TopBar from '../topBar/TopBar'
import SideBar from '../sideBar/SideBar'
import Dashboard from '../dashboard/Dashboard'
import { Link, Outlet ,useParams} from 'react-router-dom'
import style from "./restaurant.module.css"
import { MdHistory, MdOutlineSettings, MdOutlineSpaceDashboard } from 'react-icons/md'
import {useSelector,useDispatch} from 'react-redux'
import { getRestaurantData } from '../../redux/restaurants/restaurantsActions'

function Restaurant() {
    const [restaurant, setRestaurant] = useState()
    const dispatch=useDispatch()
    const {id}=useParams();
    useEffect(() => {
        console.log(id)
        dispatch(getRestaurantData(id))

    }, [dispatch])
    

    return (
        <div>
            <TopBar />
            <div className='dashboard'>
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
        </div>
    )
}

export default Restaurant;
