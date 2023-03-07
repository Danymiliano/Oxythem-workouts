'use client'

import { FC, MouseEvent, useState } from 'react'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setActiveBand, setActiveBarbell, setActiveBodyweight, setActiveDumbbells } from '@/store/slices/equipmentSlice'

import { Button } from '../base/Button/Button'
import styles from './SelectionMenu.module.scss'

export interface EquipmentState {
  bodyweight: boolean
  dumbbells: boolean
  barbell: boolean
  band: boolean
}

export const SelectionMenu: FC = () => {
  const [isActive, setIsActive] = useState<EquipmentState>({
    bodyweight: false,
    dumbbells: false,
    barbell: false,
    band: false,
  })

  const dispatch = useAppDispatch()

  const buttonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const textContent = (event.target as HTMLElement).textContent

    if (textContent === 'Вес тела') {
      setIsActive({ ...isActive, bodyweight: !isActive.bodyweight, dumbbells: false, barbell: false, band: false })
      dispatch(setActiveBodyweight(isActive))
    }

    if (textContent === 'Гантели') {
      setIsActive({ ...isActive, bodyweight: false, dumbbells: !isActive.dumbbells, barbell: false, band: false })
      dispatch(setActiveDumbbells(isActive))
    }

    if (textContent === 'Штанга') {
      setIsActive({ ...isActive, bodyweight: false, dumbbells: false, barbell: !isActive.barbell, band: false })
      dispatch(setActiveBarbell(isActive))
    }

    if (textContent === 'Эспандер') {
      setIsActive({ ...isActive, bodyweight: false, dumbbells: false, barbell: false, band: !isActive.band })
      dispatch(setActiveBand(isActive))
    }
  }

  return (
    <div className='container'>
      <section className={styles.section}>
        <Button
          color={isActive.bodyweight ? 'secondary' : 'primary'}
          buttonType='button'
          onClick={(e) => buttonHandler(e)}
        >
          Вес тела
        </Button>
        <Button
          color={isActive.dumbbells ? 'secondary' : 'primary'}
          buttonType='button'
          onClick={(e) => buttonHandler(e)}
        >
          Гантели
        </Button>
        <Button
          color={isActive.barbell ? 'secondary' : 'primary'}
          buttonType='button'
          onClick={(e) => buttonHandler(e)}
        >
          Штанга
        </Button>
        <Button color={isActive.band ? 'secondary' : 'primary'} buttonType='button' onClick={(e) => buttonHandler(e)}>
          Эспандер
        </Button>
      </section>
    </div>
  )
}
