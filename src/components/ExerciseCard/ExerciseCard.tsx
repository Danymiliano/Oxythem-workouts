'use client'

import Image from 'next/image'
import { FC } from 'react'

import { useAppSelector } from '@/hooks/useAppDispatch'
import { IExerciseDetails } from '@/pages/api/exercises/exercises'
import { RootState } from '@/store'

import styles from './ExerciseCard.module.scss'

interface IExerciseCard {
  equipment?: string | undefined
}

export const ExerciseCard: FC<IExerciseCard> = ({ equipment }: IExerciseCard): JSX.Element => {
  const filteredExercisesByEquipment = useAppSelector((state: RootState) => state.equipment.exercisesByEquipment)
  const bodyPartId = useAppSelector((state: RootState) => state.bodyPart.bodyPartId)

  return (
    <div>
      {filteredExercisesByEquipment &&
        filteredExercisesByEquipment
          .filter((exerciseDetails) => (equipment ? exerciseDetails.equipmentCategory === equipment : exerciseDetails))
          .filter((exerciseDetails) => (bodyPartId ? exerciseDetails.bodyPartCategory === bodyPartId : exerciseDetails))
          .map(
            ({
              id,
              name,
              difficulty,
              targetMuscles,
              firstExerciseImage,
              secondExerciseImage,
              description,
            }: IExerciseDetails) => (
              <div key={id} className={styles.card}>
                <h3 className={styles.headline}>{name}</h3>
                <div key={id}>
                  <p>
                    <strong>Сложность: </strong>
                    {difficulty}
                  </p>
                </div>
                <div className={styles.images}>
                  {firstExerciseImage && secondExerciseImage ? (
                    <>
                      <Image width={577} height={323} src={firstExerciseImage} alt={name} />
                      <Image width={577} height={323} src={secondExerciseImage} alt={name} />
                    </>
                  ) : (
                    ''
                  )}
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
            ),
          )}
    </div>
  )
}
