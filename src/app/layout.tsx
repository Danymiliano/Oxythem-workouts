'use client'

import '@/styles/index.scss'

import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { Header } from '@/components/base/Header/Header'
import { SelectionMenu } from '@/components/SelectionMenu/SelectionMenu'
import { store } from '@/store'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }: RootLayoutProps) => (
  <html lang='ru'>
    <head />
    <Provider store={store}>
      <body>
        <Header />
        <SelectionMenu />
        {children}
      </body>
    </Provider>
  </html>
)

export default RootLayout
