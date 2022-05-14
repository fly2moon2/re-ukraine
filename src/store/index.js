// redux toolkit way...
// ref.:https://ithelp.ithome.com.tw/articles/10275697
// https://codesandbox.io/s/proud-sound-blm4d?file=/src/App.js:0-100

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import tagReducer from "./tag";
//import authReducer from "./auth";
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'


const store = configureStore({
  reducer: { 
    counter: counterReducer, 
    tag:tagReducer,
    todos: todosReducer,
    filters: filtersReducer
  }
});

export default store;