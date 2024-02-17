import React, { useEffect, useState } from 'react';
import style from './collectorDashboard.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { fetchCollectorHistory, updateOrderCollector } from '../../redux/restaurants/restaurantsActions';
import { useParams } from 'react-router-dom';

function Dashboard() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const[updateHistory,setHistory]=useState()
    const {history ,loading } = useSelector(state => state.collectorHistory);
 const newHistory=   history.filter(item=>item.status!=="delivered")
 function onChangeOption(value,order_id){
    newHistory.map(it=>{
        if(it.order_id===order_id){
            it.status=value;
        }
        var toUpdate=newHistory.filter(item=>item.order_id===order_id)
        console.log(toUpdate)
        dispatch(updateOrderCollector(toUpdate))
    })
    console.log(newHistory,"new history")
    // dispatch(updateOrderCollector(newHistory))
    // setHistory(newHistory)
 }
    useEffect(()=>{
        dispatch(fetchCollectorHistory(id))

        // return(updateHistory)=>{
        //     console.log("document unmount",updateHistory)
        // }
    },[dispatch])
  return (
    <div className={style.dashboard}>
        {
            loading ?(

                <h3>Loading </h3>
                )
        :(
      <table className={style.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Restaurant ID</th>
            <th>Item</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {newHistory?.map((item, index) => (
         
             <tr key={index}>
             <td>{index + 1}</td>
             <td>{item.restaurant_id}</td>
             <td>{item.dishes.map((item)=>(
                 <p>{item.name}-{item.quantity}</p>
                 ))}</td>
                <td>{item.phoneNumber}</td>
                <td><select onChange={(e)=>onChangeOption(e.target.value,item.order_id)} name="status" id="status">
               {
                ["pending", "packing", "ready", "collected", "delivered"].map(it=>(
                    it===item.status?(<option value={it} key={item.order_id} selected={true}>{it}</option>) :(<option value={it} key={it.order_id}  selected={false}>{it}</option>)
                ))
               }
                    </select></td>
                </tr>
                
            
          ))}
        </tbody>
      </table>
  )}
    </div>
  );
}

export default Dashboard;
