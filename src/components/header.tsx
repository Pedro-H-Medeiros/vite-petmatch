import logo from '@/assets/logo.svg'

import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="fixed z-50 w-full bg-green-500">
      <div className="flex items-center justify-between px-36 pb-2 pt-3">
        <img src={logo} alt="" />

        <nav className="flex space-x-4">
          <NavLink to="/adopt">Adote um pet</NavLink>
          <NavLink to="/donate">Doação</NavLink>
          <NavLink to="/rescue">Resgate</NavLink>
        </nav>
      </div>
    </div>
  )
}
