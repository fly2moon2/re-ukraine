// redux toolkit way...

import { createSlice } from "@reduxjs/toolkit";

const mockTasks = [
    {
      id: uniqueId(),
      title: 'Learn Redux',
      description: 'The store, actions, and reducers, oh my!',
      status: 'Unstarted',
    },
    {
      id: uniqueId(),
      title: 'Peace on Earth',
      description: 'No big deal.',
      status: 'In Progress',
    },
  ];

const initialTaskState = { label: 'think', showtask:true };

const taskSlice = createSlice({
  name: "task",
  initialState: initialTaskState,
  reducers: {
    toggleShow(state) {
      state.showtask = !state.showtask;
    }
  }
});

/*const store = configureStore({
  reducer: counterSlice.reducer
});*/

export const taskActions = taskSlice.actions;

export default taskSlice.reducer;