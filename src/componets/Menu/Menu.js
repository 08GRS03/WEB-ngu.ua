import React from "react";
import { Nav,Container,Navbar,NavDropdown,Form,FormControl,Button,Dropdown} from "react-bootstrap";
import {Link,Outlet} from "react-router-dom"
import "../Menu/Menu.css"
import search from "../Menu/search.svg"

export default function Menu(){
    return(
      <Navbar bg="success" expand="lg">
      <Container fluid>
          <a className="btn" href="/" variant="success">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                  </svg>
          </a>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic1">НГУ</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/kerivn">КЕРІВНИЦТВО</Dropdown.Item>
                    <Dropdown.Item href="https://ngu.gov.ua/symvolika/">СИМВОЛІКА</Dropdown.Item>
                    <Dropdown.Item href="https://ngu.gov.ua/struktura-naczionalnoyi-gvardiyi-ukrayiny/">СТРУКТУРА</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">ЗАВДАННЯ</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic2">
                ДІЯЛЬНІСТЬ
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="https://ngu.gov.ua/blagodijna-dopomoga/">БЛАГОДІЙНА ДОПОМОГА</Dropdown.Item>
                  <Dropdown.Item href="https://ngu.gov.ua/mizhnarodne-spivrobitnycztvo/">МІЖНАРОДНЕ СПІВРОБІТНИЦТВО</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">МИРОТВОРЧА ДІЯЛЬНІСТЬ</Dropdown.Item>
                  <Dropdown.Item href="/sport">СПОРТ</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic3">
              ГРОМАДЯНАМ
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">ПРИЙОМ НА ВІЙСЬКОВУ СЛУЖБУ</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">НАДІСЛАТИ СВОЮ АНКЕТИ</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">ТЕЛЕФОН ДОВІРИ</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">ВІДКРИТІ ДАНІ</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>  
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic4">
                УЧАСНИКАМ АТО
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Title</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Title</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Title</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>  
                
                <Button variant="success"><a href="https://ngu.gov.ua/kontakty"></a>КОНТАКТИ</Button>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Пошук"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}