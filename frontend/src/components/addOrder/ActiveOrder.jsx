import React, { useState } from 'react'
import style from './activeOrder.module.css'
function ActiveOrder() {
    const [content, setcontent] = useState(1)
    const data=[
        {
          "order_id": "ORD-12345",
          "restaurant_id": "RES-98765",
          "collector_id": "COL-43210",
          "type": "Delivery",
          "dishes": [
            {
              "name": "Pizza Margherita",
              "quantity": 1
            },
            {
              "name": "Garlic Bread",
              "quantity": 2
            }
          ],
          "collection_time": "2024-02-12 18:00:00",
          "total_quantity": 3,
          "status": "Pending"
        },
        {
          "order_id": "ORD-54321",
          "restaurant_id": "RES-12345",
          "collector_id": "COL-09876",
          "type": "Pickup",
          "dishes": [
            {
              "name": "Pad Thai",
              "quantity": 2
            },
            {
              "name": "Spring Rolls",
              "quantity": 1
            }
          ],
          "collection_time": "2024-02-13 12:00:00",
          "total_quantity": 3,
          "status": "Confirmed"
        },
        {
          "order_id": "ORD-98765",
          "restaurant_id": "RES-09876",
          "collector_id": "COL-54321",
          "type": "Delivery",
          "dishes": [
            {
              "name": "Sushi Bento Box",
              "quantity": 1
            },
            {
              "name": "Edamame",
              "quantity": 1
            }
          ],
          "collection_time": "2024-02-14 20:00:00",
          "total_quantity": 2,
          "status": "Cancelled"
        }
      ]
      
      var list =data.map((item,index)=>
        <tr key={item.order_id} className={style.tr}>
                  <td className={style.td}>{index}</td>
                  <td className={style.td}>{item.order_id}</td>
                  <td className={style.td}>{item.type}</td>
                  <td className={style.td}>{item.dishes.map(dish=> `${dish.name}(${dish.quantity}) , `)}</td> 
                  <td className={style.td}>{item.collection_time}</td>
                  <td className={style.td}>{item.total_quantity}</td>
                  <td className={style.td}>{item.status}</td>
        </tr>

      )
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