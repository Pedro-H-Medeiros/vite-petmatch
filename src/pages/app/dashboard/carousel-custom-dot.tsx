import 'react-multi-carousel/lib/styles.css'

import { DotProps } from 'react-multi-carousel'

type CarouselCustomDotProps = DotProps

export function CarouselCustomDot({ onClick, active }: CarouselCustomDotProps) {
  return (
    <li className={active ? 'active' : 'inactive'} onClick={() => onClick}>
      <button className="m-3 bg-rose-500 p-3">_</button>
    </li>
  )
}
