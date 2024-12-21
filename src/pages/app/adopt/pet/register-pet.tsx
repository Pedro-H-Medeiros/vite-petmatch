import { ErrorMessage } from '@hookform/error-message'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { useMutation } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { recordPet } from '@/api/record-pet'
import { ErrorMessageInput } from '@/components/error-message-input'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

import { PetData } from './pet-data'

interface RegisterPetBody {
  name: string
  race: string
  sex: string
  type: string
  image_urls: string[]
}

export function RegisterPet() {
  const [date, setDate] = useState<Date>()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterPetBody>()

  const watchFields = watch(['name', 'race', 'sex', 'type'])

  const { mutateAsync: registerPetFn } = useMutation({
    mutationFn: recordPet,
  })

  async function handleRegisterPet(data: RegisterPetBody) {
    try {
      await registerPetFn({
        name: data.name,
        age: date ?? new Date(),
        race: data.race,
        sex: data.sex,
        type: data.type,
        adoptionStatus: 'AVAILABLE',
        imageUrls: data.image_urls,
      })

      toast.success('Animal cadastrado.')
    } catch (error) {
      toast.error('Animal não cadastrado.')
    }
  }

  return (
    <div className="flex items-start justify-center space-x-5 pb-4 pt-56">
      <div className="border-2 border-green-300 bg-white font-Inter">
        <div className="grid grid-cols-[minmax(22rem,1fr)] md:grid-cols-[minmax(22rem,1fr),1fr]">
          <form
            onSubmit={handleSubmit(handleRegisterPet)}
            className="flex flex-col justify-center border-2 border-green-300 px-6 py-6"
          >
            <h1 className="text-2xl font-bold">Pet para doar</h1>
            <div>
              <figure>
                <img src="" alt="" />
              </figure>
              <p className="font-bold">Fernanda Sousa</p>
            </div>

            <div>
              <span className="text-xs text-gray-600">
                Fotos 1/1 - você pode adicionar até 10 fotos
              </span>
              <input type="image" src="" alt="" />
            </div>

            <div className="space-y-2">
              <h1 className="font-bold">Adicionar descrição</h1>
              <div className="flex flex-col gap-5">
                <span>
                  <Input
                    id="name"
                    placeholder="Nome"
                    className="placeholder:font-light"
                    {...register('name', {
                      required: 'Este campo é obrigatório.',
                      minLength: {
                        value: 2,
                        message: 'O nome deve ter pelo menos 2 caracteres.',
                      },
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => (
                      <ErrorMessageInput error={message} />
                    )}
                  />
                </span>
                <span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !date && 'text-muted-foreground',
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, 'PPP', {
                            locale: ptBR,
                          })
                        ) : (
                          <span>Data de nascimento</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded border border-gray-300 bg-white"
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </span>
                <span>
                  <Input
                    id="race"
                    placeholder="Raça"
                    className="placeholder:font-light"
                    {...register('race', {
                      required: 'Este campo é obrigatório.',
                    })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="race"
                    render={({ message }) => (
                      <ErrorMessageInput error={message} />
                    )}
                  />
                </span>
                <Select
                  onValueChange={(value) => setValue('sex', value)}
                  defaultValue=""
                >
                  <SelectTrigger
                    aria-label="Selecione o sexo do pet"
                    className="font-light"
                  >
                    <SelectValue placeholder="Sexo" className="font-light" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Macho</SelectItem>
                    <SelectItem value="female">Fêmea</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessage
                  errors={errors}
                  name="sex"
                  render={({ message }) => (
                    <ErrorMessageInput error={message} />
                  )}
                />

                <Select
                  onValueChange={(value) => setValue('type', value)}
                  defaultValue=""
                >
                  <SelectTrigger
                    aria-label="Selecione o tipo do pet"
                    className="font-light"
                  >
                    <SelectValue placeholder="Tipo" className="font-light" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Cão</SelectItem>
                    <SelectItem value="cat">Gato</SelectItem>
                    <SelectItem value="horse">Cavalo</SelectItem>
                  </SelectContent>
                </Select>
                <ErrorMessage
                  errors={errors}
                  name="type"
                  render={({ message }) => (
                    <ErrorMessageInput error={message} />
                  )}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 rounded bg-brown-700 py-2 font-bold text-white"
            >
              Publicar
            </button>
          </form>

          <PetData
            name={watchFields[0]}
            age={date}
            race={watchFields[1]}
            sex={watchFields[2]}
            type={watchFields[3]}
          />
        </div>
      </div>
    </div>
  )
}
