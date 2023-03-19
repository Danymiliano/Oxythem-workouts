import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface IBodyPartId {
  bodyPartId: string
}

const initialState: IBodyPartId = {
  bodyPartId: '',
}

export const bodyPartSlice = createSlice({
  name: 'Body part',
  initialState,
  reducers: {
    savePickedBodyPart(state, action: PayloadAction<string>) {
      state.bodyPartId = action.payload
    },
  },
})

export const { savePickedBodyPart } = bodyPartSlice.actions

export default bodyPartSlice.reducer
