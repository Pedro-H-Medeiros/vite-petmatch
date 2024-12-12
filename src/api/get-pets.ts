import { api } from '@/lib/axios'

interface GetPetsResponse {
  pets: {
    id: string
    ong_id: string
    name: string
    age: string
    sex: 'Male' | 'Female'
    race: string
    color: string
    adoption_status: 'AVAILABLE' | 'PENDING' | 'ADOPTED'
    image_urls: string[]
    created_at: string
  }[]
}

export async function getPets() {
  const response = await api.get<GetPetsResponse>('/pets')

  return response.data
}
