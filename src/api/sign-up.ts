import { api } from '@/lib/axios'

interface signUpBody {
  name: string
  cpf: string
  email: string
  phone: string
  password: string
  imageUrl: string
  role: 'MEMBER' | 'ADMIN' | 'ONG_ADMIN' | 'USER'
}

export async function signUp({
  name,
  cpf,
  email,
  phone,
  password,
  imageUrl,
  role,
}: signUpBody) {
  await api.post('/accounts', {
    name,
    cpf,
    email,
    phone,
    password,
    image_url: imageUrl,
    role,
  })
}
