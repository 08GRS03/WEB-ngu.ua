import {Carousel} from "react-bootstrap"
import "./CarouselFotos.css"
import ngu1 from "./ngu1.jpg"
import ngu2 from "./ngu2.jpg"
import ngu3 from "./ngu3.jpg"
import ngu4 from "./ngu4.jpg"
import ngu5 from "./ngu5.jpg"


export default function CarouselF(){
    return(
      <div class="fotos">
           <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ngu3}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ngu1}
          alt="Second slide"
        />
    
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ngu2}
          alt="Third slide"
        />    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ngu5}
          alt="Third slide"
        />    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ngu4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
    )
}
