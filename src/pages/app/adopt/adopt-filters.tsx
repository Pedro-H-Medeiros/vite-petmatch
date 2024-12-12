import { Checkbox } from '@/components/ui/checkbox'

export function AdoptFilters() {
  return (
    <div className="sticky top-[12.5rem] w-[17.0625rem] min-w-max space-x-2 rounded-r-3xl bg-green-500 p-2">
      <p className="text-brown-700">
        Filtro: <span>Cães, macho, M</span>
      </p>

      <div className="font-Inter *:select-none">
        <h1 className="pb-4 pt-4 text-xl font-bold text-brown-700">Animais</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="horse"
              name="animal_type"
              className="border-brown-700"
            />
            <label htmlFor="horse">Cavalos</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="dog"
              name="animal_type"
              className="border-brown-700"
            />
            <label htmlFor="dog">Cães</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="cat"
              name="animal_type"
              className="border-brown-700"
            />
            <label htmlFor="cat">Gatos</label>
          </div>
        </div>

        <h1 className="pb-4 pt-4 text-xl font-bold text-brown-700">Sexo</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="male"
              name="animal_sex"
              className="border-brown-700"
            />
            <label htmlFor="male">Macho</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="female"
              name="animal_sex"
              className="border-brown-700"
            />
            <label htmlFor="female">Fêmea</label>
          </div>
        </div>

        <h1 className="pt-4 text-xl font-bold text-brown-700">Porte</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="G"
              name="animal_weight"
              className="border-brown-700"
            />
            <label htmlFor="G">G (mais de 25kg) </label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="M"
              name="animal_weight"
              className="border-brown-700"
            />
            <label htmlFor="M">M (até 25kg)</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="P"
              name="animal_weight"
              className="border-brown-700"
            />
            <label htmlFor="P">P (até 10kg)</label>
          </div>
        </div>

        <h1 className="pb-4 pt-4 text-xl font-bold text-brown-700">Idade</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="up_ten"
              name="animal_age"
              className="border-brown-700"
            />
            <label htmlFor="up_ten">Até 10 anos</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="up_five"
              name="animal_age"
              className="border-brown-700"
            />
            <label htmlFor="up_five">Até 5 anos</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="more_than_ten"
              name="animal_age"
              className="border-brown-700"
            />
            <label htmlFor="more_than_ten">Mais de 10 anos</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <Checkbox
              id="less_than_five"
              name="animal_age"
              className="border-brown-700"
            />
            <label htmlFor="less_than_five">Menos de 6 meses</label>
          </div>
        </div>
      </div>
    </div>
  )
}
