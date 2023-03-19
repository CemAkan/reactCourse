import Header from "./components/Header";
import "./App.css";

const text = "successfuly";
const isLoggedIn = true;

function App() {
  return (
    <div className="abc">
      <>
        <Header />
      </>
      <p>{isLoggedIn ? text : "Unsuccessful"}</p>
    </div>
  );
}

export default App;
