import {timers} from "@/library/pomodoro-timer"

export function Controls({onReset,onPause,onStart}){

    return(
        <div>
            <button onClick={onReset} className="w-30 rounded-xl bg-blue-400 p-5 text-lg font-semibold tracking-wide text-blue-50 hover:cursor-pointer m-5">Reset</button>
            <button onClick={onStart} className="w-30 rounded-xl bg-blue-400 p-5 text-lg font-semibold tracking-wide text-blue-50 hover:cursor-pointer m-5">Pause</button>
            {/* <button onClick={onReset} className="bg-blue-400 w-17.5">Reset</button> */}
        </div>
    )
}