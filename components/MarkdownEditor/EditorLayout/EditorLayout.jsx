import React from 'react'
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import styles from "./EditorLayout.module.css"
export default function EditorLayout({markdown,setMarkdown}) {
    //console.log("Editor Layout rerender")
  return (
    <div className={styles.container}>
      <Editor
      markdown={markdown}
      setMarkdown={setMarkdown}
      />
      <Preview
      markdown={markdown}
      />
    </div>
  )
}
