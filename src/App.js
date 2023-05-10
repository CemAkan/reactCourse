import Header from "./components/Header";
import User from "./components/User";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import UserListApi from "./components/user/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import NotFound from "./components/Error404";
import Form from "./components/form/Form";

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
              <NavLink to="/user" exact activeClassName="active ">
                User
              </NavLink>
            </li>
            <li>
              <NavLink to="/counter" activeClassName="active ">
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/input" activeClassName="active ">
                Input
              </NavLink>
            </li>
            <li>
              <NavLink to="/user-list" activeClassName="active ">
                User List
              </NavLink>
            </li>
            <li>
              <NavLink to="/form" activeClassName="active ">
                Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Header} />

          <Route
            path="/user/:name"
            element={
              <User
                isLoggedIn={true}
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

          <Route path="/counter" component={Counter} />

          <Route path="/input" component={Input} />

          <Route path="/user-list" component={UserListApi} />

          <Route path="/form" component={Form} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
