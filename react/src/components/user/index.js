import { useEffect, useState } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import UserDetails from "./User";

function UserList() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <p>Loading...</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink activeClassName="active" to={`${url}/${user.id}`}>
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={UserDetails} />
      </Switch>
    </div>
  );
}

export default UserList;
