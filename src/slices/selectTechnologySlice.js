import { createSlice } from '@reduxjs/toolkit'

export const selectTechnology = createSlice({
  name: 'currentTechology',
  initialState: {
    value: 'Python',
  },
  reducers: {
    changeTechnology: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { changeTechnology } = selectTechnology.actions

export default selectTechnology.reducer