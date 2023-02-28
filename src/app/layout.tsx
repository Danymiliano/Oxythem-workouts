import '@/styles/index.scss'

import { FC, ReactNode } from 'react'

import { Header } from '@/components/base/Header/Header'

interface T {
  children: ReactNode
}

const RootLayout: FC<T> = ({ children }: { children: ReactNode }): JSX.Element => (
  <html lang='ru'>
    <head />
    <body>
      <Header />
      {children}
    </body>
  </html>
)

export default RootLayout
