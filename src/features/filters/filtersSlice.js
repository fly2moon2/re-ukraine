// redux toolkit way...
// ref.: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
// https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-9-createSlice/?from-embed=&file=/src/features/todos/TodoListItem.js:0-1802

import { createSlice } from '@reduxjs/toolkit'

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
}

const initialState = {
  status: StatusFilters.All,
  colors: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status = action.payload
    },
    colorFilterChanged: {
      reducer(state, action) {
        let { color, changeType } = action.payload
        const { colors } = state
        switch (changeType) {
          case 'added': {
            if (!colors.includes(color)) {
              colors.push(color)
            }
            break
          }
          case 'removed': {
            state.colors = colors.filter(
              (existingColor) => existingColor !== color
            )
          }
          default:
            return
        }
      },
      prepare(color, changeType) {
        return {
          payload: { color, changeType },
        }
      },
    },
  },
})

export const { colorFilterChanged, statusFilterChanged } = filtersSlice.actions

export default filtersSlice.reducer
