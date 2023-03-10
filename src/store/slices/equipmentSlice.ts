import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { EquipmentState } from '@/components/SelectionMenu/SelectionMenu'
import { IExerciseDetails } from '@/pages/api/exercises/[id]'
import { bandCategory, barbellCategory, bodyweightCategory, dumbbellsCategory } from '@/utils/constants/constants'

export interface EquipmentCategoryState {
  isBodyweightActive: boolean
  isDumbbellsActive: boolean
  isBarbellActive: boolean
  isBandActive: boolean
  bodyweightExercises: IExerciseDetails[]
  dumbbellsExercises: IExerciseDetails[]
  barbellExercises: IExerciseDetails[]
  bandExercises: IExerciseDetails[]
}

const initialState: EquipmentCategoryState = {
  isBodyweightActive: false,
  isDumbbellsActive: false,
  isBarbellActive: false,
  isBandActive: false,
  bodyweightExercises: [],
  dumbbellsExercises: [],
  barbellExercises: [],
  bandExercises: [],
}

export const equipmentSlice = createSlice({
  name: 'Equipment',
  initialState,
  reducers: {
    setActiveBodyweight(state, action: PayloadAction<EquipmentState>) {
      state.isBodyweightActive = !action.payload.isBodyweightActive
      console.log(state.isBodyweightActive)
    },

    setActiveDumbbells(state, action: PayloadAction<EquipmentState>) {
      state.isDumbbellsActive = !action.payload.isDumbbellsActive
    },

    setActiveBarbell(state, action: PayloadAction<EquipmentState>) {
      state.isBarbellActive = !action.payload.isBarbellActive
    },

    setActiveBand(state, action: PayloadAction<EquipmentState>) {
      state.isBandActive = !action.payload.isBandActive
    },

    filterByBodyweightExercises(state, action: PayloadAction<IExerciseDetails[]>) {
      state.bodyweightExercises = action.payload.filter(
        (item: IExerciseDetails) => item.equipmentCategory === bodyweightCategory,
      )
    },

    filterByDumbbellsExercises(state, action: PayloadAction<IExerciseDetails[]>) {
      state.dumbbellsExercises = action.payload.filter(
        (item: IExerciseDetails) => item.equipmentCategory === dumbbellsCategory,
      )
    },

    filterByBarbellExercises(state, action: PayloadAction<IExerciseDetails[]>) {
      state.barbellExercises = action.payload.filter(
        (item: IExerciseDetails) => item.equipmentCategory === barbellCategory,
      )
    },

    filterByBandExercises(state, action: PayloadAction<IExerciseDetails[]>) {
      state.bandExercises = action.payload.filter((item: IExerciseDetails) => item.equipmentCategory === bandCategory)
    },
  },
})

export const {
  setActiveBodyweight,
  setActiveDumbbells,
  setActiveBarbell,
  setActiveBand,
  filterByBodyweightExercises,
  filterByDumbbellsExercises,
  filterByBarbellExercises,
  filterByBandExercises,
} = equipmentSlice.actions

export default equipmentSlice.reducer
