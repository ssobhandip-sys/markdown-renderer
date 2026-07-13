import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./SyntaxHighlighter.module.css";
import React from 'react'

export default function SyntaxHighlighter({code , language}) {
  return (
    
        <ReactSyntaxHighlighter
        language={language}
        style={oneDark}
        >
            {code}
        </ReactSyntaxHighlighter>
      
  )
}
