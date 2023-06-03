import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./Actions/userActions";

function App(props) {
  const onUpdateUser = () => {
    props.dispatch(updateUser("Larry"));
  };

  console.log(props);
  
  return (
    <div className="App">
      <h2>{props.user}</h2>
      <button onClick={onUpdateUser}>Change the name</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
