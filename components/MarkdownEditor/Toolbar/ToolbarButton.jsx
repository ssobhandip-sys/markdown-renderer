import React from 'react'
import styles from "./Toolbar.module.css";
import * as Lucide from"lucide-react";

export default function ToolbarButton({id,label,icon,shortcut,onAction}) {
    //console.log(id)
    
    const Icon=Lucide[icon]
  return (
    <div >
        <button className={styles.ToolbarButton} onClick={()=>onAction(id)} title={`${label} ${shortcut}`}>
            {Icon?<Icon size={18}/>:<span>{label}</span>}
        </button>
    </div>
  )
}
