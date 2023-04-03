import Link from 'next/link'
import { FC } from 'react'

import { SvgInline } from '@/components/SvgInline/SvgInline'

import styles from '../Header/Header.module.scss'

export const Header: FC = (): JSX.Element => (
  <>
    <header className={styles.header}>
      <div className={`${styles['header-inner']} container`}>
        <Link href='/'>
          <SvgInline name='logo' width='400' height='43' />
        </Link>
        <nav>
          <ul className={styles['nav-wrapper']}>
            <li className={styles.item}>
              <Link href='/schedule'>План тренировок</Link>
            </li>
            <li className={styles.item}>
              <Link href='/exercises'>Упражнения</Link>
            </li>
            <li className={styles.item}>
              <Link href='/login'>Вход</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>
)
