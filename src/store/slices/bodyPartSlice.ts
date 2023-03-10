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
      console.log(state.abdominals)
    },

    setChest(state, action: PayloadAction<BodyPartState>) {
      const { chest } = action.payload

      state.chest = !chest
      console.log(state.chest)
    },

    setTriceps(state, action: PayloadAction<BodyPartState>) {
      const { triceps } = action.payload

      state.triceps = !triceps
      console.log(state.triceps)
    },

    setBiceps(state, action: PayloadAction<BodyPartState>) {
      const { biceps } = action.payload

      state.biceps = !biceps
      console.log(state.biceps)
    },

    setLats(state, action: PayloadAction<BodyPartState>) {
      const { lats } = action.payload

      state.lats = !lats
      console.log(state.lats)
    },

    setShoulders(state, action: PayloadAction<BodyPartState>) {
      const { shoulders } = action.payload

      state.shoulders = !shoulders
      console.log(state.shoulders)
    },

    setLowerBack(state, action: PayloadAction<BodyPartState>) {
      const { lowerBack } = action.payload

      state.lowerBack = !lowerBack
      console.log(state.lowerBack)
    },

    setQuads(state, action: PayloadAction<BodyPartState>) {
      const { quads } = action.payload

      state.quads = !quads
      console.log(state.quads)
    },

    setHamstrings(state, action: PayloadAction<BodyPartState>) {
      const { hamstrings } = action.payload

      state.hamstrings = !hamstrings
      console.log(state.hamstrings)
    },

    setGlutes(state, action: PayloadAction<BodyPartState>) {
      const { glutes } = action.payload

      state.glutes = !glutes
      console.log(state.glutes)
    },

    setCalves(state, action: PayloadAction<BodyPartState>) {
      const { calves } = action.payload

      state.calves = !calves
      console.log(state.calves)
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
