// "use client"
export function TimerDisplay({childern,mode,timeLeft,pomodoro,audioRef}){

    function formatTime(timeLeft){
        let mins=(Math.floor(timeLeft/60));
        let secs=(Math.floor(timeLeft%60));
        return `${String(mins).padStart(2,0)}:${String(secs).padStart(2,0)}` 
    }
    
    return(
        <div className="flex flex-col justify-center items-center gap-3">

            <div className="w-1/2 rounded-3xl   bg-blue-400 p-5 text-lg font-semibold tracking-wide text-blue-50 hover:cursor-pointer">{formatTime(timeLeft)}</div>
            <h2>Mode: {mode}</h2>
            <h2>Pomodoros: {pomodoro}</h2>
            <audio ref={audioRef} src="/freesound_community-reception-bell-14620.mp3" preload="auto"></audio>
        </div>
    )
}