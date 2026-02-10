"use client";
import SidePanel from "@/components/desk-components/side-navigation-panels";
import CoverNotebook from "@/components/desk-components/books/notebook-cover";
import BookShelf from "@/components/desk-components/books/book-shelf";
import Account from "@/components/desk-components/account";
import { notebooks } from "@/library/notebooks";
import { useState } from "react";
import Notes from "@/components/desk-components/notes/note";

const DeskLayout = ({ children }) => {
  const [active, setActive] = useState([
    notebooks[0].title,
    notebooks[0].notes,
  ]);

  const selectBook = ({ title, notes }) => {
    setActive([title, notes]);
  };
  const selectNote = (title) => {
    console.log(title);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <SidePanel label="Notebooks">
          <CoverNotebook title={active[0]} />
          <BookShelf data={active} onSelect={selectBook} />
          <div className="mt-auto">
            <Account />
          </div>
        </SidePanel>
      </div>

      <main className="w-3/5">{children}</main>

      <div className="w-1/5">
        <SidePanel label="Notes">
          <Notes data={active[1]} onSelect={selectNote} />
        </SidePanel>
      </div>
    </div>
  );
};

export default DeskLayout;
