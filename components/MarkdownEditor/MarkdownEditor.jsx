import React,{useState} from "react";
import EditorLayout from "./EditorLayout/EditorLayout";
export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  return (
    <div>
      <EditorLayout markdown={markdown} setMarkdown={setMarkdown} />
    </div>
  );
}
