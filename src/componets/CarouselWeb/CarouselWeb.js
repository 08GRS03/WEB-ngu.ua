import {Carousel,Image,Col} from "react-bootstrap"
import "./CarouselWeb.css"
import mo from "./mo-e1613987569610.png"
import mvs from "./mvs_logo-e1613987518143.png"
import npu from "./npu-e1613987451575.png"
import president from "./president-e1613987483963.png"
import rnbo from "./rnbo-e1613987544957.png"
import sbu from "./sbu-e1613987597255.png"



export default function CarouselWeb(){
    return(
         <div class="web">
                                <Carousel>
                        <Carousel.Item>
                         <Col xs={12} md={12}>
                            <div className='img-center'><Image src={mo} rounded /></div>
                          </Col>
                         </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                           
                        <div className='img-center'><Image src={mvs} rounded /></div>
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <div className='img-center'><Image src={npu} rounded /></div>
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <div className='img-center'><Image src={president} rounded /></div>
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <div className='img-center'><Image src={rnbo} rounded /></div>
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <div className='img-center'><Image src={sbu} rounded /></div>
                          </Col>
                        </Carousel.Item>
                     
                        </Carousel>
      </div>
    )
}