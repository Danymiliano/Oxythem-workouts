'use client'

import { useRouter } from 'next/navigation'
import { FC, MouseEvent, useEffect } from 'react'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { IExerciseDetails } from '@/pages/api/exercises/exercises'
import { saveEquipmentType, saveExercises } from '@/store/slices/equipmentSlice'

import styles from './SelectionMenu.module.scss'

interface ISelectionMenu {
  bodyPart?: string | undefined
}

export const SelectionMenu: FC<ISelectionMenu> = ({ bodyPart }: ISelectionMenu) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    const fetchExercisesByBodyPart = async () => {
      try {
        const response = await fetch(`/api/exercises`)
        const body = await response.json()

        const exercisesFilteredByBodyPart = body.filter((exerciseDetails: IExerciseDetails) =>
          bodyPart ? bodyPart === exerciseDetails.bodyPartCategory : exerciseDetails,
        )

        dispatch(saveExercises(exercisesFilteredByBodyPart))
      } catch (error) {
        throw new Error('Ошибка загрузки данных')
      }
    }

    fetchExercisesByBodyPart()
  }, [])

  const buttonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const { textContent } = event.target as HTMLElement

    if (textContent === 'Вес тела') {
      router.push(`/exercises/bodyweight/`)
      dispatch(saveEquipmentType('bodyweight'))
    }

    if (textContent === 'Гантели') {
      router.push(`/exercises/dumbbells/`)
      dispatch(saveEquipmentType('dumbbells'))
    }

    if (textContent === 'Штанга') {
      router.push(`/exercises/barbell/`)
      dispatch(saveEquipmentType('barbell'))
    }

    if (textContent === 'Эспандер') {
      router.push(`/exercises/band/`)
      dispatch(saveEquipmentType('band'))
    }
  }

  return (
    <div className='container'>
      <section className={styles.section}>
        <button onClick={(e) => buttonHandler(e)}>Вес тела</button>
        <button onClick={(e) => buttonHandler(e)}>Гантели</button>
        <button onClick={(e) => buttonHandler(e)}>Штанга</button>
        <button onClick={(e) => buttonHandler(e)}>Эспандер</button>
      </section>
    </div>
  )
}
