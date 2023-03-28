import Header from "./components/Header";
import User from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <User
        isLoggedIn={true}
        name="Cem"
        surname="Akan"
        friends={["friend-1", "friend-2", "friend-3"]}
      />
    </>
  );
}

export default App;
