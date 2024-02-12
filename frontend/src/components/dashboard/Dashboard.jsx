import React,{useCallback, useState} from 'react'
import style from './dashBoard.module.css'
import AddOrder from '../addOrder/AddOrder'
import { MdAdd } from 'react-icons/md'
import ActiveOrder from '../addOrder/ActiveOrder'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {v4 as uuidv4} from "uuid"
import PopupBox from './Popup'
function Dashboard() {

 return (
   <div className={style.dashboard}>
      {console.log("Dashboard rendering" )}
       
      <div style={{display:"flex",alignItems:"center"}}>
      <h3>
Add New Order,
      </h3>
<PopupBox/>

      </div>
      <ActiveOrder/>
    
    </div>
  )
}

export default Dashboard