'use client'

import { useRouter } from 'next/navigation'
import { FC, MouseEvent } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch'
import { RootState } from '@/store'
import { savePickedBodyPart } from '@/store/slices/bodyPartSlice'

import { SvgBackBodyMap } from '../SvgBackBodyMap/SvgBackBodyMap'
import { SvgFrontBodyMap } from '../SvgFrontBodyMap/SvgFrontBodyMap'
import styles from './BodyMap.module.scss'

export const BodyMap: FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const equipmentType = useAppSelector((state: RootState) => state.equipment.equipmentType)

  const handleBodyPart = (event: MouseEvent<SVGGElement>): void => {
    const id = (event.target as HTMLElement).id

    dispatch(savePickedBodyPart(id))

    switch (id) {
      case 'abdominals':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/abdominals`)
        break

      case 'chest':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/chest`)
        break

      case 'triceps':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/triceps`)
        break

      case 'biceps':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/biceps`)
        break

      case 'lats':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/lats`)
        break

      case 'shoulders':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/shoulders`)
        break

      case 'lowerBack':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/lowerback`)
        break

      case 'quads':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/quads`)
        break

      case 'hamstrings':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/hamstrings`)
        break

      case 'glutes':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/glutes`)
        break

      case 'calves':
        router.push(`/exercises/${equipmentType ? equipmentType : 'bodyweight'}/calves`)
        break
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className='body-map'>
          <SvgFrontBodyMap height='750' width='550' handleBodyPart={handleBodyPart} />
        </div>
        <div className='body-map'>
          <SvgBackBodyMap height='750' width='550' handleBodyPart={handleBodyPart} />
        </div>
      </div>
    </>
  )
}
