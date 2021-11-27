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
                           <a href="https://www.mil.gov.ua/" type='blank' >
                           <div className='img-center'><Image src={mo} href="#" rounded /></div>
                           </a>
                           
                          </Col>
                         </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                           <a href="https://mvs.gov.ua/">
                           <div className='img-center'><Image src={mvs} rounded /></div>
                           </a>
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <a href="https://npu.edu.ua/">
                           <div className='img-center'><Image src={npu} rounded /></div>
                           </a>
                      
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <a href="https://www.president.gov.ua/">
                           <div className='img-center'><Image src={president} rounded /></div>
                           </a>
                       
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <a href="https://www.rnbo.gov.ua/">
                           <div className='img-center'><Image src={rnbo} rounded /></div>
                           </a>
                       
                          </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Col xs={12} md={12}>
                        <a href="https://ssu.gov.ua/">
                           <div className='img-center'><Image src={sbu} rounded /></div>
                           </a>
                       
                          </Col>
                        </Carousel.Item>
                     
                        </Carousel>
      </div>
    )
}