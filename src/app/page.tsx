import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { type NextPage } from 'next'
import { ReactNode } from 'react'

const Home: NextPage = ({ children }: { children?: ReactNode }): JSX.Element => (
  <>
    <div className='page-wrapper'>{children}</div>
  </>
)

export default Home
