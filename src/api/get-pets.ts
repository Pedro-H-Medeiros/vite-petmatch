import { api } from '@/lib/axios'

export interface GetPetsQuery {
  type?: string | null
  sex?: string | null
  weight?: string | null
  age?: string | null
}

export interface GetPetsResponse {
  pets: {
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
  }[]
}

export async function getPets({ type, sex, weight, age }: GetPetsQuery) {
  const response = await api.get<GetPetsResponse>('/pets', {
    params: {
      type,
      sex,
      weight,
      age,
    },
  })

  return response.data
}
