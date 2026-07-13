import React, { useState, useRef,useEffect } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./CodeBlock.module.css";
export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const timerIdRef = useRef(null);

  useEffect(() => {
    return () => {
        if (timerIdRef.current) {
            clearTimeout(timerIdRef.current);
        }
    };
}, []);

  const handleCopyText = async () => {
    //if(!text) return;
    try {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
      await navigator.clipboard.writeText(text);
      setCopied(true);
      timerIdRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log("copy text error",err)
    }
  };

  return (
    <div>
      {copied ? (
        "✓copied"
      ) : (
        <button onClick={handleCopyText} className={styles.button}>
          <Copy size={16} />
        </button>
      )}
    </div>
  );
}
