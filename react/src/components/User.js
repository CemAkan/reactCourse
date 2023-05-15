import Proptypes from "prop-types";
import { useParams } from "react-router-dom";

function User({ isLoggedIn, friends, location }) {
  let { name } = useParams();
  if (!isLoggedIn) {
    return <p>You are not logged in</p>;
  } else {
    return (
      <>
        <h1>User</h1>
        <p>{`Hello, ${name}`}</p>

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
User.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
  friends: [],
  location: {
    city: "Unknown",
    country: "Unknown",
    zipCode: 0,
    region: "Unknown",
  },
};

export default User;
