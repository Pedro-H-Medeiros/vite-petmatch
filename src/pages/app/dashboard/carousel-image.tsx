import 'react-multi-carousel/lib/styles.css'

import Carousel from 'react-multi-carousel'

import { CarouselCustomDot } from './carousel-custom-dot'

interface CarouselImageProps {
  children: React.ReactNode
}

export function CarouselImage({ children }: CarouselImageProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div id="main-slide" className="carousel slide -z-10" data-ride="carousel">
      <div className="carousel-inner">
        <Carousel
          responsive={responsive}
          ssr
          arrows={false}
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
          customDot={<CarouselCustomDot />}
        >
          {children}
        </Carousel>
      </div>
    </div>
  )
}
