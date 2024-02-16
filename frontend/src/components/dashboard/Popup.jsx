
import React, { useCallback, useState } from 'react'
import style from './dashBoard.module.css'
import AddOrder from '../addOrder/AddOrder'
import { MdAdd } from 'react-icons/md'
import ActiveOrder from '../addOrder/ActiveOrder'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from "uuid"
import { UseSelector,useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { createOrderRestaurant } from '../../redux/restaurants/restaurantsActions'
function PopupBox() {
    const [uuid, setuuid] = useState("")
    const [open, setopen] = useState(false)
    const [item, setitem] = useState('')
    const [quantity,setQuantity]=useState(0);
    const {id}=useParams()
    const count = 0;
    const [orders, setorders] = useState([])
    // const memoizedUpdate = useCallback(() => setorders([1], count))
    const dispatch=useDispatch();
    function generateUuid() {
        setuuid(uuidv4())
        setopen(true)
    }
    function addOrder(){
        console.log("working ")
        setorders([...orders,{"name":item,"quantity":quantity}])
      
    };
    function placeOrder(){
        const order={
            order_id:uuid,
            restaurant_id:id,
            collector_id:"",
            type:"Null for now",
            dishes:orders,
            total_quantity:60,
            status:"packing"
        }
        setopen(false)
        dispatch(createOrderRestaurant(id,order))
    };
    return (
        <div>
            <button className={style.button} onClick={generateUuid}><MdAdd /></button>
            <Popup
                open={open}
                modal
                nested
            >
                {close => (
                    <>
                        {uuid ? (
                            <div className="modal">
                                <button className={style.close} onClick={() => { setopen(false) }}>
                                    &times;
                                </button>
                                <h1>Order Id</h1>
                                {uuid} <br/>
                                <label>Item</label>
                                <input type="text"  value={item} onChange={(e)=>{setitem(e.target.value)}}/>
                                <label>Quantity</label>
                                <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
                                <button onClick={addOrder}>
                                    Add
                                </button>
                                {
                                    orders.map(item=>(
                                        // console.log(called)
                                        // console.log("inside map function")
                                        <p>{item.name}{item.quantity}</p>
                                    ))
                                }
                                <div className={style.action}>
                                    <button
                                        className="button"
                                        onClick={async () => {
                                           placeOrder()
                                            close();
                                        }}
                                    >
                                        Order
                                    </button>
                                </div>
                            </div>
                        ) : (<h1>loading </h1>)
                        }
                    </>
                )}
            </Popup>
        </div>
    )
}

export default PopupBox
