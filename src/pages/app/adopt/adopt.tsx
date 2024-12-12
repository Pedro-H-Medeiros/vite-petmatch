import { AdoptFilters } from './adopt-filters'
import { AdoptPetList } from './adpot-pet-list'

export function AdoptPage() {
  return (
    <div className="flex items-start justify-center space-x-5 pb-4 pt-56">
      <AdoptFilters />
      <AdoptPetList />
    </div>
  )
}
