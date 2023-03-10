'use client'

import Image from 'next/image'
import { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch'
import { IExerciseDetails } from '@/pages/api/exercises/[id]'
import { getExercises } from '@/store/slices/exercisesSlice'
import { defaultCategory } from '@/utils/constants/constants'

import styles from './ExerciseCard.module.scss'

interface IExerciseCardProps {
  bodyPartCategoryId?: number
}

export const ExerciseCard: FC<IExerciseCardProps> = ({ bodyPartCategoryId }: IExerciseCardProps): JSX.Element => {
  const exercises = useAppSelector((state) => state.exercises.exercisesList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getExercises())
  }, [dispatch])

  return (
    <div>
      {exercises &&
        exercises.map(
          ({
            id,
            name,
            difficulty,
            targetMuscles,
            firstExerciseImage,
            secondExerciseImage,
            description,
            bodyPartCategory,
          }: IExerciseDetails) =>
            bodyPartCategoryId === defaultCategory ? (
              <div key={id} className={styles.card}>
                <h3 className={styles.headline}>{name}</h3>
                <div key={id}>
                  <p>
                    <strong>Сложность: </strong>
                    {difficulty}
                  </p>
                </div>
                <div className={styles.images}>
                  <Image width={577} height={323} src={firstExerciseImage && firstExerciseImage} alt={name} />
                  <Image width={577} height={323} src={secondExerciseImage && secondExerciseImage} alt={name} />
                </div>
                <div>
                  <p>
                    <strong>Задействованные мышечные группы: </strong>
                    {targetMuscles}
                  </p>
                  <p>
                    <strong>Описание: </strong>
                    {description}
                  </p>
                </div>
              </div>
            ) : bodyPartCategoryId && bodyPartCategoryId === bodyPartCategory ? (
              <div key={id} className={styles.card}>
                <h3 className={styles.headline}>{name}</h3>
                <div key={id}>
                  <p>
                    <strong>Сложность: </strong>
                    {difficulty}
                  </p>
                </div>
                <div className={styles.images}>
                  <Image width={577} height={323} src={firstExerciseImage && firstExerciseImage} alt={name} />
                  <Image width={577} height={323} src={secondExerciseImage && secondExerciseImage} alt={name} />
                </div>
                <div>
                  <p>
                    <strong>Задействованные мышечные группы: </strong>
                    {targetMuscles}
                  </p>
                  <p>
                    <strong>Описание: </strong>
                    {description}
                  </p>
                </div>
              </div>
            ) : (
              ''
            ),
        )}
    </div>
  )
}
