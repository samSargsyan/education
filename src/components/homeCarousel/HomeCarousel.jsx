import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './homeCarousel.scss';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HomeCarousel = ({carousleItems}) => {
    return(
        <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={3500}>
          {carousleItems.map((item)=>{
            return (
              <div>
                <div style={{backgroundImage: `url('${item.image}')`}} className="carouselItem"></div>
                <span>{item.title}</span>
              </div>
            )
          })}
        </Carousel>
    )
}

export default HomeCarousel;

