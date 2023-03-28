import Proptypes from "prop-types";

function User({ username, isLoggedIn, friends }) {
  return (
    <>
      <p>{isLoggedIn ? `Hello, ${username}` : "Login is unsuccessful"}</p>
      {friends.map((friend, index) => {
        return <div key={index}>{friend}</div>;
      })}
    </>
  );
}

User.propTypes = {
  username: Proptypes.string.isRequired,
  isLoggedIn: Proptypes.bool.isRequired,
  friends: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default User;
