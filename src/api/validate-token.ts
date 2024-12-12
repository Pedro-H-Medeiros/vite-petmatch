import { api } from '@/lib/axios'

interface ValidateTokenResponse {
  isValid: boolean
  token: string
}

export async function validateToken() {
  const response = await api.get<ValidateTokenResponse>('/sessions/validate')

  return response.data
}
