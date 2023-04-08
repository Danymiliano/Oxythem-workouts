import Link from 'next/link'
import { FC } from 'react'

import { SearchBar } from '@/components/SearchBar/SearchBar'
import { SvgInline } from '@/components/SvgInline/SvgInline'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAuth } from '@/hooks/useAuth'
import { removeUser } from '@/store/slices/userSlice'

import styles from '../Header/Header.module.scss'

export const Header: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAuth()

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles['header-inner']} container`}>
          <Link href='/'>
            <SvgInline name='logo' width='400' height='43' />
          </Link>
          <SearchBar placeholder='Поиск' />
          <nav>
            <ul className={styles['nav-wrapper']}>
              <li className={styles.item}>
                <Link href='/schedule'>План тренировок</Link>
              </li>
              <li className={styles.item}>
                <Link href='/exercises'>Упражнения</Link>
              </li>
              <li className={styles.item}>
                {isAuth ? (
                  <button onClick={() => dispatch(removeUser())}>Выйти</button>
                ) : (
                  <Link href='/login'>Вход</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
