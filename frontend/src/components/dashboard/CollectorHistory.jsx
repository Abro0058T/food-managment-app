import React, { useEffect, useState } from 'react';
import style from './collectorDashboard.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { fetchCollectorHistory, updateOrderCollector } from '../../redux/restaurants/restaurantsActions';
import { useParams } from 'react-router-dom';

function Dashboard() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const {history ,loading } = useSelector(state => state.collectorHistory);

    useEffect(()=>{
        dispatch(fetchCollectorHistory(id))

    },[dispatch])
  return (
    <div className={style.dashboard}>
        {
            loading ?(

                <h3>Loading </h3>
                )
        :(
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Restaurant ID</th>
            <th>Item</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history?.map((item, index) => (
         
             <tr key={index}>
             <td>{index + 1}</td>
             <td>{item.restaurant_id}</td>
             <td>{item.dishes.map((item)=>(
                 <p>{item.name}-{item.quantity}</p>
                 ))}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.status}</td>
                </tr>
                
            
          ))}
        </tbody>
      </table>
  )}
    </div>
  );
}

export default Dashboard;
