import Proptypes from "prop-types";

function User({ username, isLoggedIn, friends, location }) {
  return (
    <>
      <p>{isLoggedIn ? `Hello, ${username}` : "Login is unsuccessful"}</p>

      <p>
        {location
          ? `You are in ${location.city}/${location.country}/${location.region} and zip code is ${location.zipCode}`
          : "Location is unknown"}
      </p>

      {friends.map((friend, index) => {
        return <div key={index}>{friend}</div>;
      })}
    </>
  );
}

User.propTypes = {
  username: Proptypes.oneOfType([Proptypes.string, Proptypes.number])
    .isRequired,
  isLoggedIn: Proptypes.bool.isRequired,
  friends: Proptypes.arrayOf(Proptypes.string).isRequired,
  location: Proptypes.shape({
    city: Proptypes.string.isRequired,
    country: Proptypes.string.isRequired,
    zipCode: Proptypes.number.isRequired,
    region: Proptypes.string,
  }),
};

export default User;
