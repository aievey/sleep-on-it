"use client";
import SidePanel from "@/components/desk-components/side-navigation-panels";
import CoverNotebook from "@/components/desk-components/notebook-cover";
import Notebook from "@/components/desk-components/notebook";
import Account from "@/components/desk-components/account";
import { notebooks } from "@/library/notebooks";
import { useState } from "react";

const DeskLayout = ({ children }) => {
  const [active, setActive] = useState([
    notebooks[0].title,
    notebooks[0].notes,
  ]);
  const selectBook = ({ title, notes }) => {
    setActive([title, notes]);
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <SidePanel label="Notebooks">
          <CoverNotebook title={active[0]} />
          <div className="flex h-full flex-col divide-y divide-stone-700 overflow-y-scroll p-6">
            {notebooks.map((book) => (
              <Notebook
                key={book.id}
                notes={book.notes}
                onSelect={selectBook}
                data={book}
              >
                {book.title}
              </Notebook>
            ))}
          </div>

          <div className="mt-auto">
            <Account />
          </div>
        </SidePanel>
      </div>

      <main className="w-3/5">{children}</main>

      <div className="w-1/5">
        <SidePanel label="Notes">
          {active[1].map((note) => (
            <div key={note.id} className="bg-white">
              {note.title}
            </div>
          ))}
        </SidePanel>
      </div>
    </div>
  );
};

export default DeskLayout;
