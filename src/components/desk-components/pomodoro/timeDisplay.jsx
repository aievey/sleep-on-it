// "use client"
export function TimerDisplay({childern,mode,timeLeft}){

    // function formatTime(timeLeft){
    //     let mins=(Math.floor(timeLeft/60));
    //     let secs=(Math.floor(timeLeft%60));
    //     return mins,secs 
    // }
    
    return(
        <>
            <div className="w-1/2 rounded-3xl bg-blue-400 p-5 text-lg font-semibold tracking-wide text-blue-50 hover:cursor-pointer">{Math.floor(timeLeft/60)}:{Math.floor(timeLeft%60)}</div>
            <h2>{mode}</h2>
        </>
    )
}