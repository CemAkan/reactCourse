import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";

function userReducer(state = " ", action) {
  switch (action.type) {
    case "userUpdate":
      return action.payload;

    default:
      return state;
  }
}

function productReducer(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: "Apple",
        type: "phone",
      },
    ],

    user: "Cem",
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const updateUserNameAction = {
  type: "userUpdate",
  payload: {
    user: "Deneme",
  },
};
store.dispatch(updateUserNameAction);

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
