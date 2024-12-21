import { api } from '@/lib/axios'

interface RegisterPetBody {
  name: string
  age: string | Date | undefined
  race: string
  sex: string
  type: string
  adoptionStatus: 'AVAILABLE' | 'PENDING' | 'ADOPTED'
  imageUrls: string[]
}

export async function recordPet({
  name,
  age,
  race,
  sex,
  type,
  adoptionStatus,
}: RegisterPetBody) {
  return await api.post(
    '/pets',
    {
      name,
      age,
      sex,
      race,
      type,
      adoption_status: adoptionStatus,
      image_urls: ['http://example.com/lucy1.jpg'],
    },
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NzU0ZTc1MC05MGM4LTQwZTItOWVmNS03YWYxOWI0NTZmNDQiLCJpYXQiOjE3MzQ3NDAxODIsImV4cCI6MTczNDc1MDk4Mn0.EEeO1Cr3rcj0_hRDBAn_T-K9oGy49mhdoNFpKA5OcBLfUBmIX69YY6YLYhsCCbPcANVEz7-ptfyLf3lmRnjSriq2yFyA4H6oc1jWL4m5lG88GemcSUA5zcwTXGeiNzYi99SJkqINU6GlOhCR-LJE9FN_4_wlcyQAO3_kmMFP8HDu6suv52xY-iyWUrHwHnmA8d7vcp74W-m2q_odfRuiUN2ZW48TmvPjfQOyXZvck7HOQHJ5JhLprcDZZcTneWEFLhS_Z2QNRatIcm5DEpz3ExGogehuIfOghQFWbdoXJdtv39DQTGXKf47h7RkEatIkgs1UPHoDbsVtESmJ5yDQTg`,
      },
    },
  )
}
