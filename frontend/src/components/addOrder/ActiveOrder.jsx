import React, { useEffect, useState } from 'react'
import style from './activeOrder.module.css'
import {useSelector,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { getRestaurantData } from '../../redux/restaurants/restaurantsActions'
function ActiveOrder() {
    const [content, setcontent] = useState(1)
        const {restaurant} =useSelector((state)=>state.restaurant)
        const {history,loaiding} =useSelector((state)=>state.restaHistory)
      const dispatch=useDispatch()
      console.log(restaurant)
      const {id}=useParams()
      var list =history.map((item,index)=>
      {
        if(item.status=="packing"){
        return <tr key={item.order_id} className={style.tr}>
        <td className={style.td}>{index}</td>
        <td className={style.td}>{item.order_id}</td>
        <td className={style.td}>{item.type}</td>
        <td className={style.td}>{item.dishes.map(dish=> `${dish.name}(${dish.quantity}) , `)}</td> 
        <td className={style.td}>{item.collection_time}</td>
        <td className={style.td}>{item.total_quantity}</td>
        <td className={style.td}>{item.status}</td>
</tr>
      }
        
    }

      )
      useEffect(()=>{
        dispatch(getRestaurantData(id))
      },[dispatch,])
      console.log(list)
      console.log("activity ordr rendering ")
  return (
    <div className={style.orderBox}>
        <h3>Current Orders</h3>
        {
            content ?(
                <div className={style.order}>
                    <table className={style.table}>
                        <tr className={style.tr}>
                        <th className={style.th}>S.No</th>
                        <th className={style.th}>Order-id</th>
                        <th className={style.th}>Type</th>
                        <th className={style.th}>Dishes</th>
                        <th className={style.th}>Collection_time</th>
                        <th className={style.th}>Total_Quantity</th>
                        <th className={style.th}>Status</th>
                        </tr>
                        {list}
                    </table>
                </div>
            ):(
                <h1>Loading </h1>
            )
        }
    </div>
  )
}

export default ActiveOrder