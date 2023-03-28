function User({ name, surname, isLoggedIn, friends }) {
  return (
    <>
      <p>
        {isLoggedIn ? `Hello, ${name} ${surname}` : "Login is unsuccessful"}
      </p>
      {friends.map((friend, index) => {
        return <div key={index}>{friend}</div>;
      })}
    </>
  );
}

export default User;
