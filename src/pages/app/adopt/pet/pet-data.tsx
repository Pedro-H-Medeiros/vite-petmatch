import { Separator } from '@radix-ui/react-select'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PetDataProps {
  name: string
  age: string | Date | undefined
  race: string
  sex: string
  type: string
  // image_urls: string[]
}

export function PetData({ name, age, race, sex, type }: PetDataProps) {
  return (
    <section className="flex max-w-[51.4375rem] flex-col border-2 border-green-300 p-20 font-Inter lg:flex-row">
      <div className="w-full border-2 border-green-300 p-4 lg:w-max">
        <div className="m-auto h-full">
          <h2 className="text-xl font-bold">Foto do pet</h2>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-2 border-green-300 py-9 pl-4 pr-16">
        <div className="text-nowrap text-[20px]">
          <h1 className="mb-7 text-3xl">Dados do Pet</h1>
          <p>Nome: {name}</p>
          <p>Idade: {age && formatDistanceToNow(age, { locale: ptBR })}</p>
          <p>Raça: {race}</p>
          <p>
            Sexo: {sex === 'male' && 'Macho'}
            {sex === 'female' && 'Fêmea'}
          </p>
          <p>
            Tipo: {type === 'dog' && 'Cão'}
            {type === 'cat' && 'Gato'} {type === 'horse' && 'Cavalo'}
          </p>
        </div>
        <Separator className="bg-green-500 text-center" />
        <div className="space-y-7 text-nowrap">
          <h1 className="font-bold">Informações sobre o Doador</h1>
          <div>
            <figure>
              <img src="" alt="" />
            </figure>
            <p className="font-bold">Fernanda Sousa</p>
          </div>
        </div>
      </div>
    </section>
  )
}
