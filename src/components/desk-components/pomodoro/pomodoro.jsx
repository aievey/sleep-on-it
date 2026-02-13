"use client";

import { useEffect, useRef, useState } from "react";
import { TimerDisplay } from "./timeDisplay";
import { Controls } from "./controls";

export default function Pomodoro() {
  const timers = {
    shortBreak: 15,
    longBreak: 900,
    study: 10
  }

  const [mode, setMode] = useState("study"); // shortbreak || longbreak
  const [timeLeft, setTimeLeft] = useState(timers.study); //to update timer
  const [isPaused, setIsPaused] = useState(false); // see if timer paused
  const [pomodoro, setPomodoros] = useState(0); //count number of sessions
  const [isStarted, setIsStarted] = useState(false);
  const [sound,setSound]=useState(true);

  const audioRef=useRef(null);

  useEffect(() => {
    if (!isStarted || isPaused || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, isStarted, timeLeft]);


  useEffect(() => {
    if (timeLeft !== 0) return;

    playSound();
    if (mode === "study") {
      setPomodoros(prev => {
        const next = prev + 1;

        if (next === 4) {
          setMode("longBreak");
          setTimeLeft(timers.longBreak);
          return 0;
        }

        setMode("shortBreak");
        setTimeLeft(timers.shortBreak);
        return next;
      });
    }else{
      setMode("study");
      setTimeLeft(timers.study)
    }
  }
, [timeLeft]);

  const playSound=()=>{
      if(!sound) return;
      const audio=audioRef;
      audio.current.play();
  }


  const reset = () => {
    setIsStarted(false);
    setTimeLeft(timers[mode]);
    setIsPaused(true)
  }
  // 

  const start = () => {
    if (!isStarted) {
      setIsStarted(true);
      setIsPaused(false);
    } else {
      setIsPaused(prev => !prev);
    }
  };

  const onSound=()=>{
    setSound(!sound);
  }

  return (
    <>
      <div className="min-w-80 rounded-xl bg-emerald-600 p-4 " >
        
        <TimerDisplay timeLeft={timeLeft} mode={mode} pomodoro={pomodoro} audioRef={audioRef} />
        <Controls onReset={reset} onStart={start} onSound={onSound} isStarted={isStarted} isPaused={isPaused} sound={sound} />
      </div>

    </>
  )
}