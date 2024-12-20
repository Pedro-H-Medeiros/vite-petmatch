import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <>
      <div className="flex min-h-screen flex-col antialiased">
        <Header />

        <div className="h-dvh bg-paw-background bg-cover bg-no-repeat">
          <div className="flex flex-1 flex-col px-36">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
