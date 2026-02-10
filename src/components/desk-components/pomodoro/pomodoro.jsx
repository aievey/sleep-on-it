"use client";

import { useEffect, useState } from "react";
import { TimerDisplay } from "./timeDisplay";
import { Controls } from "./controls";

export function Pomodoro(){
    const timers={
    shortBreak:300,
    longBreak:900,
    study:1500
}
    
    const [mode,setMode]=useState("shortBreak"); // shortbreak || longbreak
    const [timeLeft,setTimeLeft]=useState(timers.shortBreak); //to update timer
    const [isPaused,setIsPaused]=useState(false); // see if timer paused
    const [sessions,setSessions]=useState(0); //count number of sessions

    useEffect(()=>{
        if(isPaused)return;
        if(timeLeft<=0) return 0;
        const interval=setInterval(()=>{
        setTimeLeft(prev=>prev-1)},1000);

        return ()=>clearInterval(interval);
    },[isPaused,timeLeft]);


    useEffect(() => {
  if (timeLeft !== 0) return;

  if (mode === "study") {
    setSessions(prev => prev + 1);
    setMode("shortBreak");
    setTimeLeft(timers.shortBreak);
  } else if(sessions==4){
    setSessions(0);
    setMode("longBreak");
    setTimeLeft(timers.longBreak);
  }else  {
    setMode("study");
    setTimeLeft(timers.study);
  }
}, [timeLeft]);

const reset=()=>{
  setTimeLeft(timers[mode]);
  setIsPaused(true)
}
const start=()=>{
  if(isPaused===true) setIsPaused(false);
  else{setIsPaused(true);}
  console.log(isPaused);
}

    return(
        <>
        <div className="min-w-80 rounded-xl bg-emerald-600 p-4">
          
            <TimerDisplay timeLeft={timeLeft} mode={mode}/>
            <Controls onReset={reset} onStart={start} />
        </div>
            
        </>
    )
}