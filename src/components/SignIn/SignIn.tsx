'use client'

import { useFormik } from 'formik'
import Link from 'next/link'
import React from 'react'
import * as Yup from 'yup'

import { Button } from '../base/Button/Button'
import styles from './SignIn.module.scss'

export const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Введите корректный адрес электронной почты').required('Введите почту, чтобы войти'),
      password: Yup.string().required('Введите пароль, чтобы войти'),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <h3 className={styles.header}>Вход</h3>

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

          <div className={styles.buttons}>
            <Link href='./register'>
              <Button buttonType='button' color={'primary'}>
                Ещё нет аккаунта?
              </Button>
            </Link>
            <Button buttonType='submit' color={'secondary'}>
              Войти
            </Button>
          </div>
          <Button buttonType='button' color={'primary'}>
            Войти с помощью Google
          </Button>
        </form>
      </div>
    </div>
  )
}
