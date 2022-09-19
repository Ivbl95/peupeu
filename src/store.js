import { configureStore } from '@reduxjs/toolkit'
import selectTechnologyReducer from './slices/selectTechnologySlice'

export default configureStore({
  reducer: {
    currentTechnology: selectTechnologyReducer,
  },
})