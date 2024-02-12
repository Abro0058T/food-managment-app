import React from 'react'
import style from "./sideBar.module.css"
import { MdOutlineSpaceDashboard ,MdHomeFilled,MdHistory,MdOutlineSettings} from "react-icons/md";

function SideBar() {
  return (
    <div className={style.sideBar}>
        <div className={style.sideButtons}><MdOutlineSpaceDashboard className={style.icons}/>Dashboard </div>
        <div className={style.sideButtons}><MdHistory className={style.icons} />
History</div>
        <div className={style.sideButtons}><MdOutlineSettings className={style.icons}/>settings</div>
    </div>
  )
}

export default SideBar