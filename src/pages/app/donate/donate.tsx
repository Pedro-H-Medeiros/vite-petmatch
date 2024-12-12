export function Donate() {
  return (
    <>
      <div className="flex h-screen items-center justify-center pb-4 pt-36">
        <div className="flex h-full flex-wrap items-center justify-center gap-x-64">
          <div className="h-[16.875rem] w-[23.1875rem] rounded-2xl bg-brown-700 text-white">
            <div className="relative flex h-full items-center justify-center self-center">
              <h2 className="font-Montserrat text-2xl font-bold">Limpeza</h2>
              <button className="absolute -bottom-9 w-[17.1875rem] cursor-pointer rounded-full bg-brown-900 p-5 text-2xl font-bold">
                Doar
              </button>
            </div>
          </div>
          <div className="h-[16.875rem] w-[23.1875rem] rounded-2xl bg-brown-700 text-white">
            <div className="relative flex h-full items-center justify-center self-center">
              <h2 className="font-Montserrat text-2xl font-bold">
                Medicamentos
              </h2>
              <button className="absolute -bottom-9 w-[17.1875rem] cursor-pointer rounded-full bg-brown-900 p-5 text-2xl font-bold">
                Doar
              </button>
            </div>
          </div>
          <div className="h-[16.875rem] w-[23.1875rem] rounded-2xl bg-brown-700 text-white">
            <div className="relative flex h-full items-center justify-center self-center">
              <h2 className="font-Montserrat text-2xl font-bold">Alimentos</h2>
              <button className="absolute -bottom-9 w-[17.1875rem] cursor-pointer rounded-full bg-brown-900 p-5 text-2xl font-bold">
                Doar
              </button>
            </div>
          </div>
          <div className="h-[16.875rem] w-[23.1875rem] rounded-2xl bg-brown-700 text-white">
            <div className="relative flex h-full items-center justify-center self-center">
              <h2 className="font-Montserrat text-2xl font-bold">
                Diárias em clínicas
              </h2>
              <button className="absolute -bottom-9 w-[17.1875rem] cursor-pointer rounded-full bg-brown-900 p-5 text-2xl font-bold">
                Doar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
