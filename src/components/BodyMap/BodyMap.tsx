'use client'

import { useRouter } from 'next/navigation'
import { FC, MouseEvent, useState } from 'react'

import { useAppDispatch } from '@/hooks/useAppDispatch'
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

  const router = useRouter()
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
        router.push('/exercises/abdominals')
        break

      case 'chest':
        setBodyPart({
          ...bodyPart,
          chest: !bodyPart.chest,
        })
        dispatch(setChest(bodyPart))
        router.push('/exercises/chest')
        break

      case 'triceps':
        setBodyPart({
          ...bodyPart,
          triceps: !bodyPart.triceps,
        })
        dispatch(setTriceps(bodyPart))
        router.push('/exercises/triceps')
        break

      case 'biceps':
        setBodyPart({
          ...bodyPart,
          biceps: !bodyPart.biceps,
        })
        dispatch(setBiceps(bodyPart))
        router.push('/exercises/biceps')
        break

      case 'lats':
        setBodyPart({
          ...bodyPart,
          lats: !bodyPart.lats,
        })
        dispatch(setLats(bodyPart))
        router.push('/exercises/lats')
        break

      case 'shoulders':
        setBodyPart({
          ...bodyPart,
          shoulders: !bodyPart.shoulders,
        })
        dispatch(setShoulders(bodyPart))
        router.push('/exercises/shoulders')
        break

      case 'lowerBack':
        setBodyPart({
          ...bodyPart,
          lowerBack: !bodyPart.lowerBack,
        })
        dispatch(setLowerBack(bodyPart))
        router.push('/exercises/lowerback')
        break

      case 'quads':
        setBodyPart({
          ...bodyPart,
          quads: !bodyPart.quads,
        })
        dispatch(setQuads(bodyPart))
        router.push('/exercises/quads')
        break

      case 'hamstrings':
        setBodyPart({
          ...bodyPart,
          hamstrings: !bodyPart.hamstrings,
        })
        dispatch(setHamstrings(bodyPart))
        router.push('/exercises/hamstrings')
        break

      case 'glutes':
        setBodyPart({
          ...bodyPart,
          glutes: !bodyPart.glutes,
        })
        dispatch(setGlutes(bodyPart))
        router.push('/exercises/glutes')
        break

      case 'calves':
        setBodyPart({
          ...bodyPart,
          calves: !bodyPart.calves,
        })
        dispatch(setCalves(bodyPart))
        router.push('/exercises/calves')
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
