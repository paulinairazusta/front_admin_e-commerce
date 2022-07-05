import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminSlice";

export const store = configureStore(
  {
    reducer: {
      admin: adminReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Esto es para que funcione el redux devtools
);
