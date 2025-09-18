import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice.js";

const store = configureStore({
  reducer: accountReducer,
});

export default store;
