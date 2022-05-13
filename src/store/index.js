// redux toolkit way...
// ref.:https://ithelp.ithome.com.tw/articles/10275697
// https://codesandbox.io/s/proud-sound-blm4d?file=/src/App.js:0-100

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
//import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer}
});

export default store;