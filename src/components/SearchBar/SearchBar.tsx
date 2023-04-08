'use client'

import Link from 'next/link'
import { FC } from 'react'
import { useEffect, useRef, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { IExerciseDetails } from '@/pages/api/exercises/exercises'

import { SvgSearchIcon } from '../SvgSearchIcon/SvgSearchIcon'
import { SvgSpinnerIcon } from '../SvgSpinnerIcon/SvgSpinnerIcon'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  placeholder?: string
}

export const SearchBar: FC<SearchBarProps> = ({ placeholder }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [exercises, setExercises] = useState<IExerciseDetails[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const debouncedValue = useDebounce(searchValue, 400)

  useEffect(() => {
    const fetchExercisesByName = async () => {
      setLoading(true)
      try {
        if (debouncedValue.length > 0) {
          const response = await fetch('/api/exercises/')
          const body = await response.json()

          const exercisesByName = body.filter(({ name }: IExerciseDetails) =>
            name.toLowerCase().includes(debouncedValue.toLowerCase()),
          )

          setLoading(false)
          setExercises(exercisesByName)
        } else {
          setLoading(false)
          setExercises([])
        }
      } catch (error) {
        setLoading(false)
        throw new Error('Ошибка получения данных по названию.')
      }
    }

    fetchExercisesByName()
  }, [debouncedValue])

  return (
    <div className='container'>
      <div className={styles.input}>
        <input
          type='text'
          ref={inputRef}
          placeholder={placeholder}
          className={styles.search}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {loading ? (
          <span className={styles.spinner}>
            <SvgSpinnerIcon height='17' width='17' />
          </span>
        ) : (
          <SvgSearchIcon className={styles.icon} height='17' width='17' onClick={() => inputRef?.current?.focus()} />
        )}
      </div>
      <div
        className={styles.result}
        ref={resultRef}
        style={exercises.length <= 0 && debouncedValue === '' ? { display: 'none' } : { display: 'block' }}
      >
        {exercises &&
          exercises.slice(0, 10).map(({ id, name, equipmentCategory, bodyPartCategory }: IExerciseDetails) => (
            <Link href={`/exercises/${equipmentCategory}/${bodyPartCategory}`} className={styles.exercise} key={id}>
              <p>{name}</p>
            </Link>
          ))}
      </div>
    </div>
  )
}
