import { api } from '@/lib/axios'

interface signUpBody {
  name: string
  cpf: string
  email: string
  password: string
  role: 'MEMBER' | 'ADMIN' | 'ONG_ADMIN' | 'USER'
}

export async function signUp({ name, cpf, email, password, role }: signUpBody) {
  await api.post('/accounts', {
    name,
    cpf,
    email,
    password,
    role,
  })
}
