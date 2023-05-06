import Header from "./components/Header";
import User from "./components/User";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import UserListApi from "./components/user/index";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [friends] = useState(["friend-1", "friend-2", "friend-3"]);
  const [address] = useState({
    city: "Istanbul",
    country: "Turkey",
    zipCode: 34000,
    region: "Europe",
  });

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/input">Input</Link>
            </li>
            <li>
              <Link to="/user-list">User List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Header />} />

          <Route
            path="/user"
            element={
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
            }
          />

          <Route path="/counter" element={<Counter />} />

          <Route path="/input" element={<Input />} />

          <Route path="/user-list" element={<UserListApi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
