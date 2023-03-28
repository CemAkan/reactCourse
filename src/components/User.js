function User({ name, surname, isLoggedIn }) {
  return (
    <p>{isLoggedIn ? `Hello, ${name} ${surname}` : "Login is unsuccessful"}</p>
  );
}

export default User;
