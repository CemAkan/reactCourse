import Header from "./components/Header";
import User from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <User
        isLoggedIn={true}
        username="Cem"
        friends={["friend-1", "friend-2", "friend-3"]}
        location={{
          city: "Istanbul",
          country: "Turkey",
          zipCode: 34000,
          region: "Europe",
        }}
      />
    </>
  );
}

export default App;
