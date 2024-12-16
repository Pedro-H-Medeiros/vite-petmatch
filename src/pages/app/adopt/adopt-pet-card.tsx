import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface AdoptPetCardProps {
  pet: {
    id: string
    ong_id: string
    name: string
    age: string
    sex: 'male' | 'female'
    race: string
    color: string
    adoption_status: 'AVAILABLE' | 'PENDING' | 'ADOPTED'
    image_urls: string[]
    created_at: string
  }
}

export function AdoptPetCard({ pet }: AdoptPetCardProps) {
  return (
    <>
      <div className="flex min-h-[24.125rem] w-[17.0625rem] flex-col justify-between gap-2 rounded-2xl bg-brown-700 px-4 py-2 text-white">
        <div className="self-center">
          {pet.image_urls && pet.image_urls.length > 0 ? (
            <img
              className="max-h-[15.125rem] max-w-[15.125rem] object-fill"
              src={pet.image_urls[0]}
              alt={pet.name}
            />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center bg-gray-500">
              <span>Imagem indisponível</span>
            </div>
          )}
        </div>
        <div className="flex w-auto flex-col font-Montserrat">
          <h1 className="inline-block w-full self-center overflow-hidden text-ellipsis whitespace-nowrap text-nowrap text-lg font-bold">
            {pet.name}
          </h1>
          <div className="text-sm font-medium">
            {pet.sex === 'male' ? <p>Macho</p> : <p>Fêmea</p>}
            <p>{pet.race}</p>
            <p>
              {formatDistanceToNowStrict(pet.age, {
                locale: ptBR,
              })}
            </p>
          </div>
        </div>
        <button
          disabled={pet.adoption_status === 'ADOPTED'}
          className="cursor-pointer self-center rounded-3xl bg-brown-900 px-3 py-2 font-Inter"
        >
          {pet.adoption_status === 'AVAILABLE'
            ? 'Conhecer mais'
            : 'Indisponível'}
        </button>
      </div>
    </>
  )
}
