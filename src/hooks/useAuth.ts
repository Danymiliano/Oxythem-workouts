import { RootState } from '@/store'

import { useAppSelector } from './useAppDispatch'

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state: RootState) => state.user)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
