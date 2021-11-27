import React,{useState} from "react";
import {Carousel,Card,Button} from "react-bootstrap"
import "./MyCarousel.css"
import covid from "./covid.jpg"
import kalif from "./kalifornia.jpg"
import atashe from "./atase.jpg"
import Image from 'react-bootstrap/Image'
import card1 from "../../img/card1.jpg"
import card2 from "../../img/card2.jpg"
import card3 from "../../img/card3.jpg"
import card4 from "../../img/card4.jpg"
import card5 from "../../img/card5.jpg"

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return(
       <div class='news'>
         <div className='mycarousel'>
             <Carousel style={{margin:0 }} className="fix-wh" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={covid}
              alt="First slide"
            />
            {/* <Image style={{ width: '100%',height:'900px' }} src={covid} fluid /> */}
            <Carousel.Caption>
              <h3>СТОП КОРОНАВІРУС: актуально про COVID-19</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kalif}
              alt="Second slide"
            />
             {/* <Image style={{ width: '100%',height:'900px' }} src={kalif} fluid /> */}
    
            <Carousel.Caption>
              <h3>Військові аташе та іноземні дипломати відвідали Міжнародний центр підготовки підрозділів Нацгвардії </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={atashe}
              alt="Third slide"
            />
             {/* <Image style={{ width: '100%',height:'900px' }} src={atashe} fluid /> */}
            <Carousel.Caption>
              <h3>Національні гвардії України та Каліфорнії підписали Меморандум про співробітництво</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
           <div className='text-info'>
             <p className='text-info-color'> <h3>Націона́льна гва́рдія Украї́ни</h3> — військове формування з правоохоронними функціями, що входить до системи Міністерства внутрішніх справ України (МВС) і призначено для виконання завдань із захисту та охорони життя, прав, свобод і законних інтересів громадян України, суспільства і держави від злочинних та інших протиправних посягань, охорони громадського порядку та забезпечення громадської безпеки, а також у взаємодії з правоохоронними органами — із забезпечення державної безпеки і захисту державного кордону, припинення терористичної діяльності, діяльності незаконних воєнізованих або збройних формувань (груп), терористичних організацій, організованих груп та злочинних організацій. Як самостійна силова структура існувала з 1991 по 2000, як військове формування з правоохоронними функціями на базі Внутрішніх військ Міністерства внутрішніх справ України та залученням нових військових кадрів на добровольчій основі з 13 березня 2014 року. Загальна чисельність — до 60 тисяч військовослужбовців.</p>
           </div>
         </div>
        <div className='controller-side'>
        <Card  style={{ width: '400px' }}>
              <Card.Img  className="w-100-180"  variant="top" src={card1} />
              <Card.Body>
                
                <Card.Text>
                «Портрети з шафи»: гвардійці познайомились з унікальною виставкою
                </Card.Text>
                <Button variant="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                        </svg></Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '400px' }}>
              <Card.Img  className="w-100-180" variant="top" src={card2} />
              <Card.Body>
                
                <Card.Text>
                Щеплення від стресу: як підрозділи складу ООС спільно загартовують тіло та мозок
                </Card.Text>
                <Button variant="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                          </svg></Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '400px' }}>
              <Card.Img  className="w-100-180" variant="top" src={card3} />
              <Card.Body>
               
                <Card.Text>
                Привітання командувача Національної гвардії України з Днем Гідності та Свободи
                </Card.Text>
                <Button variant="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                      </svg></Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '400px' }}>
              <Card.Img className="w-100-180" variant="top" src={card4}/>
              <Card.Body>
               
                <Card.Text>
                В Миколаївській області проведено масштабні навчання із застосуванням ПТРК Javelin та БПЛА Bayraktar
                </Card.Text>
                <Button variant="success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                        </svg></Button>
              </Card.Body>
            </Card>
           
             </div>
       
       </div>
      );
    }
  
export default MyCarousel;