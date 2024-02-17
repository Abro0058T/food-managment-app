import React, { useEffect } from 'react';
import style from './history.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { fetchOrderHistoryRestaurant } from '../../redux/restaurants/restaurantsActions';
import { useParams } from 'react-router-dom';

function History() {
    const dispatch=useDispatch()
    const {id}=useParams()
    const {history ,loading } = useSelector(state => state.restaHistory);

    useEffect(()=>{
        dispatch(fetchOrderHistoryRestaurant(id))

    },[dispatch,id])
  return (
    <div className={style.History}>
        {
            loading ?(

                <h3>Loading </h3>
                )
        :(
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Order_id</th>
            <th>Collector ID</th>
            <th>Item</th>
            <th>type</th>
            <th>Total Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history?.map((item, index) => (
         
             <tr key={index}>
             <td>{index + 1}</td>
              <td>{item.order_id}</td>
             <td>{item.collector_id}</td>
             <td>{item.dishes.map((item)=>(
                 <p>{item.name}-{item.quantity}</p>
                 ))}</td>
                <td>{item.type}</td>
                <td>{item.total_quantity}</td>
                <td>{item.status}</td>
                </tr>
                
            
          ))}
        </tbody>
      </table>
  )}
    </div>
  );
}

export default History;
