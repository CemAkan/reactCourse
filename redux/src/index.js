import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import productReducer from "./Reducers/productReducer";
import userReducer from "./Reducers/userReducer";

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
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
