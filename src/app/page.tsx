'use client'

import { BodyMap } from '@/components/BodyMap/BodyMap'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAuth } from '@/hooks/useAuth'
import { removeUser } from '@/store/slices/userSlice'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const { isAuth, email } = useAuth()

  return (
    <>
      {isAuth ? (
        <div>
          <h1>Welcome</h1>
          <button onClick={() => dispatch(removeUser())}>Выйти из аккаунта {email}</button>
        </div>
      ) : (
        <div>Вы не авторизованы</div>
      )}
      <div className='page-wrapper'>
        <BodyMap />
      </div>
    </>
  )
}

export default Home
