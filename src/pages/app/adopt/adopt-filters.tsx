import { useSearchParams } from 'react-router-dom'

export function AdoptFilters() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()

  const type = searchParams.get('type')
  const sex = searchParams.get('sex')
  const age = searchParams.get('age')

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked, value } = e.target

    setSearchParams((urlState) => {
      if (checked) {
        urlState.set(name, value)
      } else if (urlState.get(name) === value) {
        urlState.delete(name)
      }

      return urlState
    })
  }

  return (
    <div className="sticky top-[12.5rem] w-[17.0625rem] min-w-max space-x-2 rounded-r-3xl bg-green-500 p-2">
      <p className="text-brown-700">
        Filtros:{' '}
        {type && (
          <span>
            {type === 'dog' && 'Cachorro'}
            {type === 'cat' && 'Gato'}
            {', '}
          </span>
        )}
        {sex && (
          <span>
            {sex === 'male' && 'Macho'}
            {sex === 'female' && 'Fêmea'}
            {', '}
          </span>
        )}
      </p>

      <div className="font-Inter *:select-none">
        <h1 className="pb-4 pt-4 text-xl font-bold text-brown-700">Animais</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="dog"
              name="type"
              value="dog"
              checked={type === 'dog'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="dog">Cães</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="cat"
              name="type"
              value="cat"
              checked={type === 'cat'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="cat">Gatos</label>
          </div>
        </div>

        {/* Filtro de sexo */}
        <h1 className="pb-4 pt-4 text-xl font-bold text-brown-700">Sexo</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="male"
              name="sex"
              value="male"
              checked={sex === 'male'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="male">Macho</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="female"
              name="sex"
              value="female"
              checked={sex === 'female'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="female">Fêmea</label>
          </div>
        </div>

        {/* Filtro de idade */}
        <h1 className="pb-4 pt-4 text-xl font-bold text-brown-700">Idade</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="up_to_ten_years"
              name="age"
              value="up_to_ten_years"
              checked={age === 'up_to_ten_years'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="up_to_ten_years">Até 10 anos</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="up_to_five_years"
              name="age"
              value="up_to_five_years"
              checked={age === 'up_to_five_years'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="up_to_five_years">Até 5 anos</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="more_than_ten_years"
              name="age"
              value="more_than_ten_years"
              checked={age === 'more_than_ten_years'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="more_than_ten_years">Mais de 10 anos</label>
          </div>
          <div className="flex items-center space-x-1 text-brown-700">
            <input
              type="checkbox"
              id="less_than_six_months"
              name="age"
              value="less_than_six_months"
              checked={age === 'less_than_six_months'}
              onChange={handleCheckboxChange}
              className="border-brown-700"
            />
            <label htmlFor="less_than_six_months">Menos de 6 meses</label>
          </div>
        </div>
      </div>
    </div>
  )
}
