import { configureStore } from '@reduxjs/toolkit'

import bodyPartReducer from './slices/bodyPartSlice'
import equipmentReducer from './slices/equipmentSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    bodyPart: bodyPartReducer,
    equipment: equipmentReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
