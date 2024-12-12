interface CardDashboardProps {
  title: string
  icon: React.ReactElement<unknown>
  redirect: string
  buttonName: string
}

export function CardDashboard({
  title,
  icon,
  redirect,
  buttonName,
}: CardDashboardProps) {
  return (
    <div className="flex min-w-80 flex-col items-center justify-between gap-14 rounded-2xl bg-brown-900 p-6 text-white">
      <h2 className="text-2xl">{title}</h2>
      <div>{icon}</div>
      <a
        href={redirect}
        className="cursor-pointer rounded-full bg-brown-700 px-8 py-2 text-base uppercase"
      >
        {buttonName}
      </a>
    </div>
  )
}
