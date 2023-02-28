import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  email: null
  token: null
  id: null
}

const initialState = {
  email: null,
  token: null,
  id: null,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
