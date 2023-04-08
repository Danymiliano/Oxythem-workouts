'use client'

import '@/styles/index.scss'
import '/firebase'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { Footer } from '@/components/base/Footer/Footer'
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
        <Footer />
      </body>
    </Provider>
  </html>
)

export default RootLayout
