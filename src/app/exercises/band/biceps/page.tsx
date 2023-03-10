'use client'

import { FC, useEffect } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { getExercises } from '@/store/slices/exercisesSlice'
import { bicepsCategory } from '@/utils/constants/constants'

const BicepsPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getExercises())
  }, [dispatch])

  return (
    <div className='container'>
      <ExerciseCard bodyPartCategoryId={bicepsCategory} />
    </div>
  )
}

export default BicepsPage
