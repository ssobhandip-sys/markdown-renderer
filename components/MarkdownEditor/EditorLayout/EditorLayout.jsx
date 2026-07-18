import React from 'react'
import styles from "./EditorLayout.module.css";

export default function EditorLayout({editor,preview}) {
    //console.log("Editor Layout rerender")
  return (
    <div className={styles.container}>
      <div className={styles.editorPanel}>{editor}</div>
      <div className={styles.previewPanel}>{preview}</div>
    </div>
  )
}
