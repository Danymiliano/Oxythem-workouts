import '@/styles/index.scss'

import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { Header } from '@/components/base/Header/Header'
import store from '@/store'

interface T {
  children: ReactNode
}

const RootLayout: FC<T> = ({ children }: { children: ReactNode }): JSX.Element => (
  <html lang='ru'>
    <head />
    <body>
      <Provider store={store}>
        <Header />
      </Provider>
      {children}
    </body>
  </html>
)

export default RootLayout
