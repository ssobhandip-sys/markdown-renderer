import React from "react";
import styles from "./Editor.module.css";

export default function Editor({ markdown, setMarkdown }) {
    //console.log("Editor rerender")
  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className={styles.container}>
      <textarea
        name=""
        id=""
        className={styles.textarea}
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Start Typing..."
      ></textarea>
    </div>
  );
}
