import NoteTaking from "@/components/desk-components/note-taking";
import NotebookSummary from "@/components/desk-components/summary";
import Pomodoro from "@/components/desk-components/pomodoro";

export const metadata = {
  title: "Desk",
  description: "The best productive environment for you! Built with caution.",
};

const Desk = () => {
  return (
    <div>
      <h1>Work Area</h1>
      <NotebookSummary />
      <NoteTaking />
      <Pomodoro />
    </div>
  );
};

export default Desk;
