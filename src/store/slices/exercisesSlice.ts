import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IExerciseDetails } from '@/pages/api/exercises/[id]'
import { API_EXERCISES, API_ROOT } from '@/utils/constants/constants'

export const getExercises = createAsyncThunk<IExerciseDetails[], void, { rejectValue: string }>(
  'exercises/getExercises',
  async (_, { rejectWithValue }) => {
    const res = await fetch(API_ROOT + API_EXERCISES)
    const data = await res.json()

    if (res.status < 200 || res.status >= 300) {
      return rejectWithValue(data)
    }

    return data
  },
)

interface IExercisesState {
  exercisesList: IExerciseDetails[]
  isLoading: boolean
}

const initialState: IExercisesState = {
  exercisesList: [],
  isLoading: false,
}

const exercisesSlice = createSlice({
  name: 'Exercises',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExercises.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(getExercises.fulfilled, (state, action) => {
      state.isLoading = false
      state.exercisesList = action.payload
    })

    builder.addCase(getExercises.rejected, (state) => {
      state.isLoading = false
      throw new Error('Не удалось получить данные')
    })
  },
})

export default exercisesSlice.reducer
