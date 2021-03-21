import React, { createContext, useReducer } from "react";

const initialState = {
  loggedIn: false,
  username: "",
  jwt: localStorage.getItem("jwt") || "",
};
const store = createContext(initialState);
const { Provider } = store;
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "setUser":
        return {
          loggedIn: true,
          username: action.payload.username,
          jwt: action.payload.jwt,
        };
      case "clearUser":
        return {
          loggedIn: false,
          username: "",
          jwt: "",
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
