
import React, { useCallback, useState } from 'react'
import style from './dashBoard.module.css'
import AddOrder from '../addOrder/AddOrder'
import { MdAdd } from 'react-icons/md'
import ActiveOrder from '../addOrder/ActiveOrder'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from "uuid"
function PopupBox() {
    const [uuid, setuuid] = useState("")
    const [open, setopen] = useState(false)
    const [item, setitem] = useState('')
    const [quantity,setQuantity]=useState(0);
    const count = 0;
    const [orders, setorders] = useState([])
    const memoizedUpdate = useCallback(() => setorders([1], count))
    function generateUuid() {
        setuuid(uuidv4())
        setopen(true)
    }
    function addOrder(){
        console.log("working ")
        setorders([...orders,{"name":item,"quantity":quantity}])
        
    };
    function placeOrder(){
        console.log(orders)
        setopen(false)
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
