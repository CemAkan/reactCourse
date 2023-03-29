import Header from "./components/Header";
import User from "./components/User";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";

function App() {
  const [friends, setFriends] = useState(["friend-1", "friend-2", "friend-3"]);
  const [address, setAddress] = useState({
    city: "Istanbul",
    country: "Turkey",
    zipCode: 34000,
    region: "Europe",
  });

  return (
    <>
      <Header />
      <User
        isLoggedIn={true}
        username="Cem"
        friends={friends}
        location={{
          city: address.city,
          country: address.country,
          zipCode: address.zipCode,
          region: address.region,
        }}
      />

      <hr />
      <br />

      <button
        onClick={() => {
          let friendCounter = friends.length;
          friendCounter++;
          setFriends([...friends, `friend-${friendCounter}`]);
        }}
      >
        Add Friend
      </button>

      <button onClick={() => setFriends([])}>Remove All Friends</button>

      <button onClick={() => setFriends(friends.slice(0, -1))}>
        Remove Last Friend
      </button>

      <hr />
      <br />

      <button
        onClick={() =>
          setAddress({ ...address, city: "Ankara", zipCode: 6000 })
        }
      >
        Change City
      </button>

      <hr />
      <br />

      <Counter />

      <hr />
      <br />

      <Input />
    </>
  );
}

export default App;
