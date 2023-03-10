'use client'

import { FC, useEffect } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { getExercises } from '@/store/slices/exercisesSlice'
import { calvesCategory } from '@/utils/constants/constants'

const CalvesPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getExercises())
  }, [dispatch])

  return (
    <div className='container'>
      <ExerciseCard bodyPartCategoryId={calvesCategory} />
    </div>
  )
}

export default CalvesPage
