import React, { useState } from "react";
import EditorLayout from "./EditorLayout/EditorLayout";
import Editor from "./Editor/Editor";
import Preview from "./Preview/Preview";
import Toolbar from "./Toolbar/Toolbar";
import styles from "./MarkdownEditor.module.css";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const handleToolButtonClick=(id)=>{
    console.log(id)
  }
  return (
    <div className={styles.markdownEditorContainer}>
      <Toolbar onAction={handleToolButtonClick}/>
      <EditorLayout
        editor={<Editor markdown={markdown} setMarkdown={setMarkdown} />}
        preview={<Preview markdown={markdown} />}
      />
    </div>
  );
}
