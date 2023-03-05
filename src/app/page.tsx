import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { ReactNode } from 'react'

import { BodyMap } from '@/components/BodyMap/BodyMap'

const Home: React.FC = () => (
  <>
    <div className='page-wrapper'>
      <BodyMap />
    </div>
  </>
)

export default Home
