import { ErrorMessage } from '@hookform/error-message'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { signUp } from '@/api/sign-up'
import { ErrorMessageInput } from '@/components/error-message-input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface signUpFormInput {
  name: string
  cpf: string
  email: string
  password: string
  role: 'MEMBER' | 'ADMIN' | 'ONG_ADMIN' | 'USER'
}
export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormInput>()

  const { mutateAsync: signUpFn } = useMutation({
    mutationFn: signUp,
  })

  async function handleSignUp(data: signUpFormInput) {
    try {
      await signUpFn({
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        role: 'USER',
      })

      toast.success('Usuário cadastrado.')
      navigate({ pathname: '/sign-in' })
    } catch (error) {
      console.log(error)

      toast.error('Usuário já cadastrado.')
    }
  }

  return (
    <div className="flex w-full flex-col items-center font-Inter">
      <h1 className="pb-11 text-2xl font-bold text-brown-700">Cadastrar</h1>
      <form
        className="flex w-full flex-col gap-1"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <div className="flex flex-col">
          <Label htmlFor="name" className="flex-1 text-xs text-gray-400/50">
            Nome:
          </Label>
          <Input
            id="name"
            type="text"
            className="h-10 select-none rounded-sm border border-gray-400 pl-2 outline-none"
            {...register('name', { required: 'Este campo é obrigatório.' })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <ErrorMessageInput error={message} />}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="cpf" className="flex-1 text-xs text-gray-400/50">
            CPF/CNPJ:
          </Label>
          <Input
            id="cpf"
            type="text"
            className="h-10 select-none rounded-sm border border-gray-400 pl-2 outline-none"
            {...register('cpf', { required: 'Este campo é obrigatório.' })}
          />
          <ErrorMessage
            errors={errors}
            name="cpf"
            render={({ message }) => <ErrorMessageInput error={message} />}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="email" className="text-xs text-gray-400/50">
            Email:
          </Label>
          <Input
            id="email"
            type="email"
            className="h-10 select-none rounded-sm border border-gray-400 pl-2 outline-none"
            {...register('email', { required: 'Este campo é obrigatório.' })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <ErrorMessageInput error={message} />}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="password" className="text-xs text-gray-400/50">
            Senha:
          </Label>
          <Input
            id="password"
            type="password"
            className="h-10 select-none rounded-sm border border-gray-400 pl-2 outline-none"
            {...register('password', {
              required: 'Este campo é obrigatório.',
              minLength: {
                value: 8,
                message: 'A senha deve conter no mínimo 8 caracteres.',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <ErrorMessageInput error={message} />}
          />
        </div>
        <button className="mt-5 w-full rounded-md bg-brown-700 py-4 text-xs font-medium text-white transition-all hover:bg-brown-900">
          Cadastrar
        </button>
      </form>
    </div>
  )
}
