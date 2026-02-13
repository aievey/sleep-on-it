"use client";
import '../globals.css';
import React from "react";

// export const metadata = {
//   title: "Sleep on it! | HOME",
//   description: "The best productive learning app on the market",
// };

function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="border p-4 w-full max-w-5xl  relative grid grid-rows-[auto_auto_1fr_auto] gap-4">

        {/* Header */}
        <div className="text-center font-semibold text-white text-lg">
          Home/welcome
        </div>

        {/* Date & Time */}
        <div className="bg-blue-500 py-2 px-4 rounded mx-auto w-fit">
          todays date and time
        </div>

        {/* Main content */}
        <div className="grid grid-cols-[200px_1fr] gap-4">
          
          {/* Welcome box */}
          <div className="bg-pink-300 rounded-lg flex items-center justify-center h-40 w-full text-center">
            Welcome<br/>(Name!)
          </div>

          {/* Learning streak box */}
          <div className="border rounded-lg p-4 flex flex-col justify-between">
            <div className="border rounded p-2 mb-2 text-sm">
              LearningStreak
              <div className="mt-2 text-xs">
                {"{Topic} {Some motivation}"}<br/>
                This will take you back to what you were doing
              </div>
            </div>
            <div className="mt-auto">
              Summary?/Suggestions?
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-start mt-4">
          <button className="bg-red-300 px-4 py-2 rounded">new note-book</button>
          <button className="bg-red-300 px-4 py-2 rounded">Continue where you left off</button>
        </div>

        {/* Small circle at top-right */}
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-pink-300"></div>

      </div>
    </div>
  );
}


export default Welcome;
