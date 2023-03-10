'use client'

import { FC, useEffect } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { getExercises } from '@/store/slices/exercisesSlice'
import { abdominalsCategory } from '@/utils/constants/constants'

const AbdominalsPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getExercises())
  }, [dispatch])

  return (
    <div className='container'>
      <ExerciseCard bodyPartCategoryId={abdominalsCategory} />
    </div>
  )
}

export default AbdominalsPage
