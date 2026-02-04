import { userNotes } from "./notes";
const notebooks = [
  {
    id: 1,
    title: "React.js",
    description: "Powerful fornt-end framework for Single Page web Apps",
    notes: userNotes,
  },
  {
    id: 2,
    title: "Next.js",
    description:
      "Built on top of react. using SSR u can bild full stack web apps using just 1 framweork",
    notes: userNotes,
  },
  {
    id: 3,
    title: "Postgres",
    description: "A powerful industry standard RDBMS",
    notes: userNotes,
  },
];

export { notebooks };
