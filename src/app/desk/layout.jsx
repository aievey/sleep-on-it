"use client";
import SidePanel from "@/components/desk-components/side-navigation-panels";
import CoverNotebook from "@/components/desk-components/notebook-cover";
import Notebook from "@/components/desk-components/notebook";
import Account from "@/components/desk-components/account";
import { notebooks } from "@/library/notebooks";
import { useState } from "react";
const DeskLayout = ({ children }) => {
  const [active, setActive] = useState("Notebook");
  const selectBook = (title) => {
    setActive(title);
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <SidePanel label="Books">
          <CoverNotebook title={active} />
          <div className="flex h-full flex-col divide-y divide-stone-700 overflow-y-scroll p-6">
            {notebooks.map((book) => (
              <Notebook key={book.id} notes={book.notes} onSelect={selectBook}>
                {book.title}
              </Notebook>
            ))}
          </div>

          <div className="mt-auto">
            <Account />
          </div>
        </SidePanel>
      </div>

      <main className="w-3/5 bg-amber-500">{children}</main>
      <div className="w-1/5">
        <SidePanel label="notes">
          <div className="bg-white">hello</div>
          <div className="bg-white">hello</div>
          <div className="mt-auto bg-white">hello</div>
        </SidePanel>
      </div>
    </div>
  );
};

export default DeskLayout;
