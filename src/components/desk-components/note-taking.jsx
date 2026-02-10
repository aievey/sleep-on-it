"use client";
import { useState } from "react";

const Note = ({ phrase, description }) => {
  return (
    <div className="flex gap-2">
      <textarea
        className="w-1/3 rounded-xl bg-purple-400 p-5"
        type="text"
        defaultValue={phrase}
      />
      <textarea
        className="w-2/3 rounded-xl bg-purple-400 p-5"
        type="text"
        defaultValue={description}
      />
    </div>
  );
};

const Summary = ({ children }) => {
  return (
    <textarea
      required
      className="h-70 w-full rounded-xl bg-amber-400 p-5 text-amber-800"
      defaultValue={children}
      type="text"
    />
  );
};

const PomodoroActions = () => {
  return (
    <div className="flex gap-2">
      <button className="w-1/2 rounded-xl bg-orange-500 p-5 font-semibold tracking-wide text-green-50 hover:cursor-pointer">
        New POMODORO
      </button>
      <button className="w-1/2 rounded-xl bg-blue-400 p-5 text-lg font-semibold tracking-wide text-blue-50 hover:cursor-pointer">
        Save
      </button>
    </div>
  );
};

const NewNote = () => {
  return (
    <button className="w-full rounded-xl bg-green-500 p-4 font-semibold tracking-wide text-green-50">
      Add Note
    </button>
  );
};

const NoteTaking = () => {
  const [note, addNote] = useState([
    {
      id: 1,
      key: "Key",
      description: "Description",
    },
    {
      id: 2,
      key: "Hello",
      description: "super Description",
    },
  ]);

  const today = new Date().toDateString();

  return (
    <main className="max-w-1/2 space-y-2 text-stone-800">
      {/* Head of the note */}
      <div className="flex justify-between rounded-xl border p-5">
        <div className="w-1/3">{today}</div>
        <input
          className="w-2/3 font-semibold tracking-wide"
          defaultValue="Title"
          type="text"
        />
      </div>
      {note.map((note) => (
        <Note key={note.id} phrase={note.key} description={note.description} />
      ))}

      <NewNote />
      <Summary>ok</Summary>
      <PomodoroActions />
    </main>
  );
};

export default NoteTaking;
