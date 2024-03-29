'use client'

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import * as Yup from 'yup'

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setUser } from '@/store/slices/userSlice'

import { Button } from '../base/Button/Button'
import styles from './SignUp.module.scss'

export const SignUp = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Введите корректный адрес электронной почты')
        .required('Заполните поле с почтой, чтобы зарегистрироваться'),
      password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Заполните поле с паролем, чтобы зарегистрироваться'),
      confirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
        .required('Подтвердите пароль, чтобы зарегистрироваться'),
    }),

    onSubmit: () => {
      alert('Вы успешно зарегистрировались')
    },
  })

  const dispatch = useAppDispatch()

  const handleRegister = (e: FormEvent<HTMLFormElement>, email: string, password: string): void => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        )
        router.push('/')
      })
      .catch(() => alert('Не удалось создать пользователя'))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <form onSubmit={(e) => handleRegister(e, formik.values.email, formik.values.password)} className={styles.form}>
          <h3 className={styles.header}>Регистрация</h3>

          <div className={styles.inputs}>
            <label htmlFor='email' className={formik.touched.email && formik.errors.email ? styles.error : ''}>
              {formik.touched.email && formik.errors.email ? formik.errors.email : 'Почта:'}
            </label>
            <input
              id='email'
              name='email'
              type='email'
              className={styles.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor='password' className={formik.touched.password && formik.errors.password ? styles.error : ''}>
              {formik.touched.password && formik.errors.password ? formik.errors.password : 'Пароль:'}
            </label>
            <input
              id='password'
              name='password'
              type='password'
              className={styles.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>

          <div className={styles.inputs}>
            <label htmlFor='confirm' className={formik.touched.confirm && formik.errors.confirm ? styles.error : ''}>
              {formik.touched.confirm && formik.errors.confirm ? formik.errors.confirm : 'Подтвердите пароль:'}
            </label>
            <input
              id='confirm'
              name='confirm'
              type='password'
              className={styles.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm}
            />
          </div>

          <div className={styles.buttons}>
            <Link href='./login'>
              <Button buttonType='button' color='primary'>
                Уже есть аккаунт?
              </Button>
            </Link>
            <Button buttonType='submit' color='secondary' active='active'>
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
