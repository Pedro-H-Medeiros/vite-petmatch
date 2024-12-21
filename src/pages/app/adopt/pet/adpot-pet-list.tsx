import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import { getPets } from '@/api/get-pets'

import { AdoptPetCard } from '../adopt-pet-card'

export function AdoptPetList() {
  const [searchParams] = useSearchParams()

  const type = searchParams.get('type')
  const sex = searchParams.get('sex')
  const age = searchParams.get('age')

  const { data: result } = useQuery({
    queryFn: () =>
      getPets({
        type,
        sex,
        age,
      }),
    queryKey: ['pets', type, sex, age],
  })

  return (
    <div className="flex w-[53.6875rem] flex-wrap gap-5">
      {!result ||
        (result.pets.length === 0 && <h1>Não há animais cadastrados.</h1>)}
      {result &&
        result.pets.map((pet) => <AdoptPetCard key={pet.id} pet={pet} />)}
    </div>
  )
}
