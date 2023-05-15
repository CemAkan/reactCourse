import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";

function userReducer(state = " ", action) {
  return state;
}

function productReducer(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
