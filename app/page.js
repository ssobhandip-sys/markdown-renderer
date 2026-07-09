"use client";

import { useState } from "react";
import EditorLayout from "@/components/EditorLayout/EditorLayout";

import React from 'react'

export default function Home() {
  const [markdown,setMarkdown]=useState("");
  console.log("Home rerender")
  return (
    <div>
      <EditorLayout
      markdown={markdown}
      setMarkdown={setMarkdown}
      />
    </div>
  )
}
