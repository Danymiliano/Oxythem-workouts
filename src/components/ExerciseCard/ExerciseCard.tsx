'use client'

import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import styles from './ExerciseCard.module.scss'

interface ExerciseDetailsTypes {
  id: string
  name: string
  difficulty: string
  targetMuscles: string
  description: string
  firstExerciseImage: string
  secondExerciseImage: string
}

export const ExerciseCard: FC = (): JSX.Element => {
  const [exercises, setExercises] = useState<Array<object>>([])

  const API_ROOT = 'http://localhost:3000/api/'
  const API_EXERCISES = 'exercises'

  useEffect(() => {
    const getExercises = async (url: string) => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setExercises(data)
      } catch (error) {
        throw new Error('Не удалось получить данные')
      }
    }
    getExercises(API_ROOT + API_EXERCISES)
  }, [])

  return (
    <div>
      {exercises &&
        exercises.map((exerciseEquipment: any) =>
          exerciseEquipment.dumbbells.chest.map((exerciseDetails: ExerciseDetailsTypes) => (
            <div key={exerciseDetails.id} className={styles.card}>
              <h3 className={styles.headline}>{exerciseDetails.name}</h3>
              <div key={exerciseDetails.id}>
                <p>
                  <strong>Сложность: </strong>
                  {exerciseDetails.difficulty}
                </p>
              </div>
              <div className={styles.images}>
                <Image
                  width={577}
                  height={323}
                  src={exerciseDetails.firstExerciseImage && exerciseDetails.firstExerciseImage}
                  alt={exerciseDetails.name}
                />
                <Image
                  width={577}
                  height={323}
                  src={exerciseDetails.secondExerciseImage && exerciseDetails.secondExerciseImage}
                  alt={exerciseDetails.name}
                />
              </div>
              <div>
                <p>
                  <strong>Задействованные мышечные группы: </strong>
                  {exerciseDetails.targetMuscles}
                </p>
                <p>
                  <strong>Описание: </strong>
                  {exerciseDetails.description}
                </p>
              </div>
            </div>
          )),
        )}
    </div>
  )
}
