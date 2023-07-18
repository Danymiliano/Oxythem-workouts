'use client'

import Link from 'next/link'
import { ChangeEvent, FC } from 'react'
import { useEffect, useRef, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { IExerciseDetails } from '@/pages/api/exercises/exercises'

import { SvgCrossIcon } from '../SvgCrossIcon/SvgCrossIcon'
import { SvgSearchIcon } from '../SvgSearchIcon/SvgSearchIcon'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  placeholder?: string
}

export const SearchBar: FC<SearchBarProps> = ({ placeholder }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [exercises, setExercises] = useState<IExerciseDetails[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchResultRef = useRef<HTMLUListElement>(null)
  const debouncedValue = useDebounce(searchValue, 400)

  useEffect(() => {
    const fetchExercisesByName = async () => {
      try {
        if (debouncedValue.length > 0) {
          const response = await fetch('/api/exercises/')
          const body = await response.json()

          const exercisesByName = body.filter(({ name }: IExerciseDetails) =>
            name.toLowerCase().includes(debouncedValue.toLowerCase()),
          )

          setExercises(exercisesByName)
        } else {
          setExercises([])
        }
      } catch (error) {
        throw new Error('Ошибка получения упражнений по названию.')
      }
    }

    fetchExercisesByName()
  }, [debouncedValue])

  const clearSearchInput = () => {
    setExercises([])
    setSearchValue('')
    setIsDropdownOpen(false)
    searchInputRef?.current?.focus()
  }

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)

    if (e.target.value.length > 0) {
      setIsDropdownOpen(true)
    } else {
      setIsDropdownOpen(false)
    }
  }

  const handleLinkClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
    searchInputRef?.current?.focus()
  }

  return (
    <div className='container'>
      <div className={styles.input}>
        <input
          type='text'
          ref={searchInputRef}
          placeholder={placeholder}
          className={styles.search}
          value={searchValue}
          onChange={(e) => handleSearchInput(e)}
        />
        {searchValue ? (
          <SvgCrossIcon className={styles.icon} height='17' width='17' onClick={clearSearchInput} />
        ) : (
          <SvgSearchIcon
            className={styles.icon}
            height='17'
            width='17'
            onClick={() => searchInputRef?.current?.focus()}
          />
        )}
      </div>
      <ul className={isDropdownOpen ? styles.open : styles.closed} ref={searchResultRef}>
        {exercises?.slice(0, 3).map(({ id, name, equipmentCategory, bodyPartCategory }: IExerciseDetails) => (
          <li key={id} className={styles.exercise}>
            <Link href={`/exercises/${equipmentCategory}/${bodyPartCategory}`} onClick={handleLinkClick} key={id}>
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
