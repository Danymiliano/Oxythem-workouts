import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface BodyPartState {
  abdominals: boolean
  chest: boolean
  triceps: boolean
  biceps: boolean
  lats: boolean
  shoulders: boolean
  lowerBack: boolean
  quads: boolean
  hamstrings: boolean
  glutes: boolean
  calves: boolean
}

const initialState: BodyPartState = {
  abdominals: false,
  chest: false,
  triceps: false,
  biceps: false,
  lats: false,
  shoulders: false,
  lowerBack: false,
  quads: false,
  hamstrings: false,
  glutes: false,
  calves: false,
}

export const bodyPartSlice = createSlice({
  name: 'Body part',
  initialState,
  reducers: {
    setAbdominals(state, action: PayloadAction<BodyPartState>) {
      const { abdominals } = action.payload

      state.abdominals = !abdominals
    },

    setChest(state, action: PayloadAction<BodyPartState>) {
      const { chest } = action.payload

      state.chest = !chest
    },

    setTriceps(state, action: PayloadAction<BodyPartState>) {
      const { triceps } = action.payload

      state.triceps = !triceps
    },

    setBiceps(state, action: PayloadAction<BodyPartState>) {
      const { biceps } = action.payload

      state.biceps = !biceps
    },

    setLats(state, action: PayloadAction<BodyPartState>) {
      const { lats } = action.payload

      state.lats = !lats
    },

    setShoulders(state, action: PayloadAction<BodyPartState>) {
      const { shoulders } = action.payload

      state.shoulders = !shoulders
    },

    setLowerBack(state, action: PayloadAction<BodyPartState>) {
      const { lowerBack } = action.payload

      state.lowerBack = !lowerBack
    },

    setQuads(state, action: PayloadAction<BodyPartState>) {
      const { quads } = action.payload

      state.quads = !quads
    },

    setHamstrings(state, action: PayloadAction<BodyPartState>) {
      const { hamstrings } = action.payload

      state.hamstrings = !hamstrings
    },

    setGlutes(state, action: PayloadAction<BodyPartState>) {
      const { glutes } = action.payload

      state.glutes = !glutes
    },

    setCalves(state, action: PayloadAction<BodyPartState>) {
      const { calves } = action.payload

      state.calves = !calves
    },
  },
})

export const {
  setAbdominals,
  setChest,
  setTriceps,
  setBiceps,
  setLats,
  setShoulders,
  setLowerBack,
  setQuads,
  setHamstrings,
  setGlutes,
  setCalves,
} = bodyPartSlice.actions

export default bodyPartSlice.reducer
