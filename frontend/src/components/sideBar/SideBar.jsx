import React from 'react'
import style from "./sideBar.module.css"
function SideBar() {
  return (
    <div className={style.sideBar}>
        <div className={style.sideButtons}>Current Order or Create Order</div>
        <div className={style.sideButtons}>History</div>
        <div className={style.sideButtons}>settings</div>
    </div>
  )
}

export default SideBar