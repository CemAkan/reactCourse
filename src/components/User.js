import Proptypes from "prop-types";

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

User.propTypes = {
  name: Proptypes.string.isRequired,
  surname: Proptypes.string.isRequired,
  isLoggedIn: Proptypes.bool.isRequired,
  friends: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default User;
