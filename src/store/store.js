import { configureStore } from '@reduxjs/toolkit'
import todoSlice from "../slice/todoSlice"

export default configureStore({
  reducer: {
    todo:todoSlice,
  }
})