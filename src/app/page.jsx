function Login () {
  return (
  <form>
    <input placeholder="username" type="text"/>
    <input type="password" placeholder="password" />
    <button>Login</button> <button>Make new account</button>
  </form>
  );
}

export const metadata = {
  title: "Sleep on it!",
  description: "The best productive learning app on the market",
};
export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <Login />

    </main>
  );
}
