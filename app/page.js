"use client";

import { useState } from "react";
import MarkdownEditor from "@/components/MarkdownEditor/MarkdownEditor";

import React from 'react'

export default function Home() {
  
  //console.log("Home rerender")
  return (
    <div>
      <MarkdownEditor/>
    </div>
  )
}
