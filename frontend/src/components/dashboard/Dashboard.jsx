import React,{useCallback, useState,useEffect} from 'react'
import style from './dashBoard.module.css'
import AddOrder from '../addOrder/AddOrder'
import { MdAdd } from 'react-icons/md'
import ActiveOrder from '../addOrder/ActiveOrder'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {v4 as uuidv4} from "uuid"
import PopupBox from './Popup'
import { fetchOrderHistoryRestaurant, getRestaurantData } from '../../redux/restaurants/restaurantsActions'
import {  useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
function Dashboard() {
  const {id}=useParams()
  const dispatch=useDispatch();
  const [orderAdd, setOrderAdded] = useState(false)
  function orderAdded(added){
    console.log("order added",added)
  setOrderAdded(!orderAdd);
  }
  useEffect(()=>{
    dispatch(getRestaurantData(id))
    dispatch(fetchOrderHistoryRestaurant(id))
  },[dispatch])
 return (
   <div className={style.dashboard}>
      {console.log("Dashboard rendering" )}
       
      <div style={{display:"flex",alignItems:"center"}}>
      <h3>
Add New Order,
      </h3>
<PopupBox orderAdd={orderAdded}/>
      </div>
      <ActiveOrder/>
    
    </div>
  )
}

export default Dashboard