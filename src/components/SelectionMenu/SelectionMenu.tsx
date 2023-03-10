'use client'

import { FC, MouseEvent, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch'
import { RootState } from '@/store'
import {
  filterByBandExercises,
  filterByBarbellExercises,
  filterByBodyweightExercises,
  filterByDumbbellsExercises,
  setActiveBand,
  setActiveBarbell,
  setActiveBodyweight,
  setActiveDumbbells,
} from '@/store/slices/equipmentSlice'
import { getExercises } from '@/store/slices/exercisesSlice'

import { Button } from '../base/Button/Button'
import styles from './SelectionMenu.module.scss'

export interface EquipmentState {
  isDumbbellsActive: boolean
  isBodyweightActive: boolean
  isBarbellActive: boolean
  isBandActive: boolean
}

export const SelectionMenu: FC = () => {
  const [isActive, setIsActive] = useState<EquipmentState>({
    isDumbbellsActive: false,
    isBodyweightActive: false,
    isBarbellActive: false,
    isBandActive: false,
  })

  const exercises = useAppSelector((state: RootState) => state.exercises.exercisesList)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getExercises())
  }, [dispatch])

  const buttonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const textContent = (event.target as HTMLElement).textContent

    switch (textContent) {
      case 'Вес тела':
        setIsActive({
          ...isActive,
          isBodyweightActive: !isActive.isBodyweightActive,
          isDumbbellsActive: false,
          isBarbellActive: false,
          isBandActive: false,
        })
        dispatch(filterByBodyweightExercises(exercises))
        dispatch(setActiveBodyweight(isActive))
        break
      case 'Гантели':
        setIsActive({
          ...isActive,
          isBodyweightActive: false,
          isDumbbellsActive: !isActive.isDumbbellsActive,
          isBarbellActive: false,
          isBandActive: false,
        })
        dispatch(filterByDumbbellsExercises(exercises))
        dispatch(setActiveDumbbells(isActive))
        break
      case 'Штанга':
        setIsActive({
          ...isActive,
          isBodyweightActive: false,
          isDumbbellsActive: false,
          isBarbellActive: !isActive.isBarbellActive,
          isBandActive: false,
        })
        dispatch(filterByBarbellExercises(exercises))
        dispatch(setActiveBarbell(isActive))
        break
      case 'Эспандер':
        setIsActive({
          ...isActive,
          isBodyweightActive: false,
          isDumbbellsActive: false,
          isBarbellActive: false,
          isBandActive: !isActive.isBandActive,
        })
        dispatch(filterByBandExercises(exercises))
        dispatch(setActiveBand(isActive))
    }
  }

  return (
    <div className='container'>
      <section className={styles.section}>
        <Button
          color={isActive.isBodyweightActive ? 'secondary' : 'primary'}
          buttonType='button'
          onClick={(e) => buttonHandler(e)}
        >
          Вес тела
        </Button>
        <Button
          color={isActive.isDumbbellsActive ? 'secondary' : 'primary'}
          buttonType='button'
          onClick={(e) => buttonHandler(e)}
        >
          Гантели
        </Button>
        <Button
          color={isActive.isBarbellActive ? 'secondary' : 'primary'}
          buttonType='button'
          onClick={(e) => buttonHandler(e)}
        >
          Штанга
        </Button>
        <Button
          color={isActive.isBandActive ? 'secondary' : 'primary'}
          buttonType='button'
          onClick={(e) => buttonHandler(e)}
        >
          Эспандер
        </Button>
      </section>
    </div>
  )
}
