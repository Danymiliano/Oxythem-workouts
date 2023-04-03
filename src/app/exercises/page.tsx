'use client'

import { FC } from 'react'

import { ExerciseCard } from '@/components/ExerciseCard/ExerciseCard'
import { SelectionMenu } from '@/components/SelectionMenu/SelectionMenu'

export interface IEquipmentCategories {
  id: string
  categoryName: string
}

const Exercises: FC = () => (
  <>
    <SelectionMenu />
    <div className='container'>
      <ExerciseCard />
    </div>
  </>
)

export default Exercises
