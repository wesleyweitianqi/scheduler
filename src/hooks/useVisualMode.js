import React, { useState } from "react";


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition =(newmode, replace = false) => {
    if (replace) {
      setMode((prev) => newmode);
      let replaceHistory = [...history];
      replaceHistory[replaceHistory.length - 1] = mode;
      setHistory((prev)=> replaceHistory);
    } else {
      setMode((prev)=> newmode);
      let newHistory = [...history];
      newHistory.push(newmode);
      setHistory((prev)=> newHistory);
    }
  }
  const back = () => {
    let preHistory = [...history]
    preHistory.pop(mode);
    setHistory((prev)=> preHistory);
    if (history.length > 1) {
      setMode((prev)=> preHistory[preHistory.length - 1]);
    }
  }

  return {mode, transition, back};
};

