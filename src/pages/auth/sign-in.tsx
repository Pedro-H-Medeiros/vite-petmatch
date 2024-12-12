import { ErrorMessage } from '@hookform/error-message'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { signIn } from '@/api/sign-in'
import { ErrorMessageInput } from '@/components/error-message-input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface SignInFormInput {
  email: string
  password: string
}

export function SignIn() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormInput>()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInFormInput) {
    try {
      await authenticate({ email: data.email, password: data.password })
      toast.success('Autenticação realizada com sucesso.')

      navigate({ pathname: '/' })
    } catch (error) {
      toast.error('Usuário ou senha inválido.')
    }
  }

  return (
    <div className="flex w-full flex-col items-center font-Inter">
      <h1 className="pb-11 text-2xl font-bold text-brown-700">Login</h1>
      <form
        className="flex w-full flex-col gap-1"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <div className="flex flex-col">
          <Label htmlFor="email" className="flex-1 text-xs text-gray-400/50">
            Email:
          </Label>
          <Input
            id="email"
            type="email"
            className="h-10 select-none rounded-sm border border-gray-400 pl-2 outline-none"
            {...register('email', {
              required: 'Este campo é obrigatório.',
            })}
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-5 w-full rounded-md bg-brown-700 py-4 text-xs font-medium text-white transition-all hover:bg-brown-900"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
