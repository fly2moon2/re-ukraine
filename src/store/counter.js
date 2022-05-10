// redux toolkit way...
// ref.:https://ithelp.ithome.com.tw/articles/10275697
// https://codesandbox.io/s/proud-sound-blm4d?file=/src/App.js:0-100
// 

// store/index.js -> store/counter.js
//import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  //initialState,
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

/*const store = configureStore({
  reducer: counterSlice.reducer
});*/

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;