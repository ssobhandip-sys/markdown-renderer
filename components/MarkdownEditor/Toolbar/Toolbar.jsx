import React from 'react'
import toolbarConfigurations from './toolbarConfig';
import ToolbarButton from './ToolbarButton';
import styles from "./Toolbar.module.css";


export default function Toolbar({onAction}) {

  // const handleToolButtonClick=(id)=>{
  //         console.log(id)
  // }

  return (
    <div className={styles.toolbarContainer}>
      {toolbarConfigurations.map((t) => (
        <ToolbarButton key={t.id} {...t} onAction={onAction} />
      ))}
    </div>
  )
}
