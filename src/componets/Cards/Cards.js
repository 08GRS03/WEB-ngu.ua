import React from "react";
import {Card,ListGroupItem,ListGroup,Button} from "react-bootstrap";
import "../Cards/Cards.css";
import ngu1 from "../../img/1-34.jpg";
import ngu2 from "../../img/stolica.jpg";
import ngu3  from "../../img/aqva.jpg";
import ngu4  from "../../img/kalunivka.jpg";
import ngu5  from "../../img/general.jpg";



export default function Cards(){
    return(
       
       <div class="cards">
                            <Card style={{ width: '10 px' }}>
                    <Card.Img className='img-size' variant="center" src={ngu3} />
                    <Card.Body>
                      <Card.Title>В акваторії Київського водосховища проходять навчання водолазів Нацгвардії</Card.Title>
                      <Card.Text>
                      У період з 22 листопада по 03 грудня  2021 року на Київщині проходить навчальний збір із фахівцями водолазної підготовки ОЗСП…
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Button variant="dark"><Card.Link href="#">Перейти</Card.Link></Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '10 px' }}>
                    <Card.Img className='img-size' variant="center" src={ngu2}/>
                    <Card.Body>
                      <Card.Title>На столичному вокзалі правоохоронці вилучили наркотичні речовини</Card.Title>
                      <Card.Text>
                      Під час виконання службових завдань військовослужбовці 25-ї бригади охорони громадського порядку імені князя Аскольда Північного ОТО Національної гвардії України спільно…
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Button variant="dark"><Card.Link href="#">Перейти</Card.Link></Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '10 px' }}>
                    <Card.Img className='img-size' variant="center" src={ngu4} />
                    <Card.Body>
                      <Card.Title>Калинівські нацгвардійці приєдналися до всеукраїнської акції «16 днів проти насильства»</Card.Title>
                      <Card.Text>
                      Щорічно в Україні з 25 листопада до 10 грудня включно проводиться Всеукраїнська акція «16 днів проти насильства». Мета акції –…
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Button variant="dark"><Card.Link href="#">Перейти</Card.Link></Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '10 px' }}>
                    <Card.Img className='img-size' variant="center" src={ngu5} />
                    <Card.Body>
                      <Card.Title>Заступник командувача Національної гвардії України (зі служби) генерал-лейтенант Микола Миколенко відвідав район проведення ООС</Card.Title>
                      <Card.Text>
                      На початку робочої поїздки заступник командувача Національної гвардії України (зі служби) генерал-лейтенант Микола Миколенко завітав до Головного управління Національної поліції…
                      </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Button  variant="dark"><Card.Link href="#">Перейти</Card.Link></Button>
                    </Card.Body>
                  </Card>
                  
                  
       </div>
   
    )
}

