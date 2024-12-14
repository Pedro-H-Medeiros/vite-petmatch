import { Facebook, Github } from 'lucide-react'
import { Outlet, useLocation } from 'react-router-dom'

export function AuthLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-paw-background bg-cover bg-center bg-no-repeat">
      <div className="m-2 w-[25.5625rem] rounded-2xl bg-gradient-to-b from-[#A5CC7A] via-[#B9D797] to-[#C2DCA4] p-2">
        <div className="h-full rounded-xl bg-white py-4">
          <div className="flex h-full flex-col items-center justify-center px-12">
            <Outlet />

            <div className="relative flex w-full items-center justify-center pb-2 pt-6">
              <p className="absolute -z-0 h-px w-full shrink-0 bg-brown-700" />
              <p className="z-0 my-2 bg-white px-2 font-Inter text-xs text-brown-700">
                Fazer login com Redes Sociais
              </p>
            </div>
            <div className="flex gap-10">
              <Facebook size={21} />
              <Github size={21} />
            </div>
            <p className="pt-6 font-Inter text-xs text-brown-700">
              {pathname === '/sign-in' ? (
                <>
                  Ainda não tenho conta!{' '}
                  <a href="/sign-up" className="font-extrabold">
                    Cadastrar
                  </a>
                </>
              ) : (
                <>
                  Já Possui conta?{' '}
                  <a href="/sign-in" className="font-extrabold">
                    Login
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
