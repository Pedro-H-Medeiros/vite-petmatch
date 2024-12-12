import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="font-Montserrat text-2xl font-bold text-brown-700 hover:text-brown-900 data-[current=true]:text-brown-900"
      {...props}
    />
  )
}
