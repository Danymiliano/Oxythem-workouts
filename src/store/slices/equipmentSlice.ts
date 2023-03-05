import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface EquipmentCategoryState {
  bodyweight: boolean
  dumbbells: boolean
  barbell: boolean
  band: boolean
}

const initialState: EquipmentCategoryState = {
  bodyweight: false,
  dumbbells: false,
  barbell: false,
  band: false,
}

export const equipmentSlice = createSlice({
  name: 'Equipment',
  initialState,
  reducers: {
    setActiveBodyweight(state, action: PayloadAction<EquipmentCategoryState>) {
      state.bodyweight = !action.payload.bodyweight
    },
    setActiveDumbbells(state, action: PayloadAction<EquipmentCategoryState>) {
      state.dumbbells = !action.payload.dumbbells
    },
    setActiveBarbell(state, action: PayloadAction<EquipmentCategoryState>) {
      state.barbell = !action.payload.barbell
    },
    setActiveBand(state, action: PayloadAction<EquipmentCategoryState>) {
      state.band = !action.payload.band
    },
  },
})

export const { setActiveBodyweight, setActiveDumbbells, setActiveBarbell, setActiveBand } = equipmentSlice.actions

export default equipmentSlice.reducer
