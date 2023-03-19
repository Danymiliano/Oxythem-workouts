import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { IExerciseDetails } from '@/pages/api/exercises/exercises'

export interface EquipmentCategoryState {
  exercisesByEquipment: IExerciseDetails[]
  equipmentType: string | undefined
}

const initialState: EquipmentCategoryState = {
  exercisesByEquipment: [],
  equipmentType: 'bodyweight',
}

export const equipmentSlice = createSlice({
  name: 'Equipment',
  initialState,
  reducers: {
    saveExercises(state, action: PayloadAction<IExerciseDetails[]>) {
      state.exercisesByEquipment = action.payload
    },
    saveEquipmentType(state, action: PayloadAction<string>) {
      state.equipmentType = action.payload
    },
  },
})

export const { saveExercises, saveEquipmentType } = equipmentSlice.actions

export default equipmentSlice.reducer
