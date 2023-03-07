'use client'

import { useRouter } from 'next/router'
import { FC, MouseEvent, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch'
import { RootState } from '@/store'
import {
  setAbdominals,
  setBiceps,
  setCalves,
  setChest,
  setGlutes,
  setHamstrings,
  setLats,
  setLowerBack,
  setQuads,
  setShoulders,
  setTriceps,
} from '@/store/slices/bodyPartSlice'

import { SvgBackBodyMap } from '../SvgBackBodyMap/SvgBackBodyMap'
import { SvgFrontBodyMap } from '../SvgFrontBodyMap/SvgFrontBodyMap'
import styles from './BodyMap.module.scss'

interface IBodyPart {
  abdominals: boolean
  chest: boolean
  triceps: boolean
  biceps: boolean
  lats: boolean
  shoulders: boolean
  lowerBack: boolean
  quads: boolean
  hamstrings: boolean
  glutes: boolean
  calves: boolean
}

export const BodyMap: FC = () => {
  const [bodyPart, setBodyPart] = useState<IBodyPart>({
    abdominals: false,
    chest: false,
    triceps: false,
    biceps: false,
    lats: false,
    shoulders: false,
    lowerBack: false,
    quads: false,
    hamstrings: false,
    glutes: false,
    calves: false,
  })

  useAppSelector((state: RootState) => state.bodyPart)
  const equipmentData = useAppSelector((state: RootState) => state.equipment)

  const dispatch = useAppDispatch()

  const handleBodyPart = (event: MouseEvent<SVGGElement>): void => {
    const id = (event.target as HTMLElement).id

    switch (id) {
      case 'abdominals':
        setBodyPart({
          ...bodyPart,
          abdominals: !bodyPart.abdominals,
        })
        dispatch(setAbdominals(bodyPart))
        break

      case 'chest':
        setBodyPart({
          ...bodyPart,
          chest: !bodyPart.chest,
        })
        dispatch(setChest(bodyPart))
        break

      case 'triceps':
        setBodyPart({
          ...bodyPart,
          triceps: !bodyPart.triceps,
        })
        dispatch(setTriceps(bodyPart))
        break

      case 'biceps':
        setBodyPart({
          ...bodyPart,
          biceps: !bodyPart.biceps,
        })
        dispatch(setBiceps(bodyPart))
        break

      case 'lats':
        setBodyPart({
          ...bodyPart,
          lats: !bodyPart.lats,
        })
        dispatch(setLats(bodyPart))
        break

      case 'shoulders':
        setBodyPart({
          ...bodyPart,
          shoulders: !bodyPart.shoulders,
        })
        dispatch(setShoulders(bodyPart))
        break

      case 'lowerBack':
        setBodyPart({
          ...bodyPart,
          lowerBack: !bodyPart.lowerBack,
        })
        dispatch(setLowerBack(bodyPart))
        break

      case 'quads':
        setBodyPart({
          ...bodyPart,
          quads: !bodyPart.quads,
        })
        dispatch(setQuads(bodyPart))
        break

      case 'hamstrings':
        setBodyPart({
          ...bodyPart,
          hamstrings: !bodyPart.hamstrings,
        })
        dispatch(setHamstrings(bodyPart))
        break

      case 'glutes':
        setBodyPart({
          ...bodyPart,
          glutes: !bodyPart.glutes,
        })
        dispatch(setGlutes(bodyPart))
        break

      case 'calves':
        setBodyPart({
          ...bodyPart,
          calves: !bodyPart.calves,
        })
        dispatch(setCalves(bodyPart))
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
