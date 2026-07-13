import React from "react";
import ReactMarkDown from "react-markdown";
import styles from "./Preview.module.css";
import markdownComponents from "../renderers";
import { markdownOptions } from "@/lib/markdown";

export default function Preview({ markdown }) {
    //console.log("preview rerender")
  return (
    <div className={styles.container}>
      <ReactMarkDown {...markdownOptions}
        components={markdownComponents}
      >{markdown}</ReactMarkDown>
    </div>
  );
}
