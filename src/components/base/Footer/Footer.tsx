import { FC } from 'react'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        © Danymiliano 2023 Oxythem Workouts. Материал распространяется в свободном доступе.
      </p>
    </div>
  )
}
