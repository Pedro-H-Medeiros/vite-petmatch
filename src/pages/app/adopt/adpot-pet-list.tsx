import { useQuery } from '@tanstack/react-query'

import { getPets } from '@/api/get-pets'

import { AdoptPetCard } from './adopt-pet-card'

export function AdoptPetList() {
  const { data: result } = useQuery({
    queryFn: () => getPets(),
    queryKey: ['pets'],
  })

  return (
    <div className="flex w-[53.6875rem] flex-wrap gap-5">
      {!result && <p>Não ha animais cadastrados.</p>}
      {result &&
        result.pets.map((pet) => <AdoptPetCard key={pet.id} pet={pet} />)}
    </div>
  )
}
