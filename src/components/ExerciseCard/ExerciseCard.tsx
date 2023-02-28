import Image from 'next/image'

import styles from './ExerciseCard.module.scss'

const getExercises = async () => {
  const res = await fetch(`${process.env.API_HOST}/exercises`)
  const exercises = res.json()

  if (!res.ok) {
    throw new Error('Не удалось получить данные')
  }

  return exercises
}

interface ExerciseDetailsTypes {
  id: string
  name: string
  difficulty: string
  targetMuscles: string
  description: string
  firstExerciseImage: string
  secondExerciseImage: string
}

export const ExerciseCard = async () => {
  const exercises = await getExercises()

  return (
    <div>
      {exercises &&
        exercises.map((exerciseEquipment: any) =>
          exerciseEquipment.dumbbells.triceps.map((exerciseDetails: ExerciseDetailsTypes) => (
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
