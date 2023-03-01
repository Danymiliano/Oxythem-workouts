import '@/styles/index.scss'

import React, { ReactNode } from 'react'

import { Header } from '@/components/base/Header/Header'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }: RootLayoutProps) => (
  <html lang='ru'>
    <head />
    <body>
      <Header />
      {children}
    </body>
  </html>
)

export default RootLayout
