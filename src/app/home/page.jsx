export const metadata = {
  title: "Sleep on it! | HOME",
  description: "The best productive learning app on the market",
};

const Welcome = () => {
  return (
    <div>
      <div>
        <h1>Hello %User%</h1>
      </div>

      {/* Over all learning health Productivity status etc */}
      <div>
        <h2>Hey, here is your learning stats.</h2>
        <p>Streak: 🔥x5 </p>
      </div>

      {/* Reminder set by user when he was last active if none then automatic reminders of where he left off*/}
      <div>
        <h2>To-dos for today</h2>
        <p>
          Hey, you must be feeling great after that productive long day
          yesterday! Here are some key points to recall before you start you day
          with great energy today
        </p>
      </div>
      <div>
        <button>I want to start on something new!</button>
        <button>Take me where we left off.</button>
      </div>
    </div>
  );
};

export default Welcome;
