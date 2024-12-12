import { api } from '@/lib/axios'

interface signInBody {
  email: string
  password: string
}

export async function signIn({ email, password }: signInBody) {
  await api.post('/sessions', {
    email,
    password,
  })
}
