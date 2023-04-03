'use client'

import '@/styles/index.scss'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { Header } from '@/components/base/Header/Header'
import { store } from '@/store'

interface IRootLayout {
  children: ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }: IRootLayout) => (
  <html lang='ru'>
    <head />
    <Provider store={store}>
      <body>
        <Header />
        {children}
      </body>
    </Provider>
  </html>
)

export default RootLayout
