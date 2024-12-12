import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'

import { validateToken } from '@/api/validate-token'

import { Loading } from './loading'

interface PrivateRouteProps {
  Component: React.ComponentType
}

export function PrivateRoute({ Component }: PrivateRouteProps) {
  const { data, isLoading, isError } = useQuery({
    queryFn: validateToken,
    queryKey: ['validate_token'],
  })

  if (isLoading) {
    return <Loading />
  }

  if (isError || !data?.isValid) {
    return <Navigate to="/sign-in" />
  }

  return <Component />
}
