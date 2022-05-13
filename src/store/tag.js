// redux toolkit way...

import { createSlice } from "@reduxjs/toolkit";

const initialTagState = { label: 'think', showTag:true };

const tagSlice = createSlice({
  name: "tag",
  initialState: initialTagState,
  reducers: {
    toggleShow(state) {
      state.showTag = !state.showTag;
    }
  }
});

/*const store = configureStore({
  reducer: counterSlice.reducer
});*/

export const tagActions = tagSlice.actions;

export default tagSlice.reducer;