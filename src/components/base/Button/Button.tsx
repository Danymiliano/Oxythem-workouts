'use client'

import { MouseEventHandler } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'primary' | 'secondary'
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  active?: 'active'
  buttonType: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({ children, active, color, onClick, buttonType }: ButtonProps) => {
  const className = `${styles.button} ${styles[`button_${color}`]} ${active !== undefined ? active : ''}`

  return (
    <>
      <button className={className} onClick={onClick} type={buttonType}>
        {children}
      </button>
    </>
  )
}
