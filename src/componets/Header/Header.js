import React from "react";
import { Button,ButtonGroup } from "react-bootstrap";
import "./Header.css"
import instagram from "./svg/instagram.svg"
import facebook from "./svg/facebook.svg"
import twitter from "./svg/twitter.svg"
import telegram from "./svg/telegram.svg"
import youtube from "./svg/youtube.svg"
import ngu from "./svg/ngu.png"
import telephone from "./svg/telephone.svg"

export default function Header(){
    return(
        <>
       <header>
         <div class="header-img">
           <img class="header-img--ngu" src={ngu} alt=""/>
         </div>
         <div class="header-name">
         <h1 class="header-name-"> НАЦІОНАЛЬНА ГВАРДІЯ УКРАЇНИ</h1>
         </div>

        <div class="header-info">
          <div class="header-info--contact">
          <img src={telephone} alt=""/>
          <p class="header-info--contact_number">Телефон довіри (044) 226-22-52</p>
          </div>
          <ButtonGroup aria-label="Basic example">
            <a href="https://t.me/s/ukrmilitary?q=%23%D0%BD%D0%B3%D1%83">
            <Button variant="light"><i class="bi bi-telegram"> <img src={telegram} alt="" /></i></Button>
            </a>
             <a href="https://www.facebook.com/NGUmainpage/">
             <Button variant="light"><i class="bi bi-instagram"><img src={facebook} alt="" /></i></Button>
             </a>
              <a href=" https://www.youtube.com/channel/UCftsubDkv2usUTqQIODP66A">
              <Button variant="light"><i class="bi bi-youtube"/><img src={youtube} alt="" /></Button>
              </a>
              <a href="https://www.instagram.com/national_guard_of_ukraine/?hl=uk">
              <Button variant="light"><i class="bi bi-facebook"/><img src={instagram} alt="" /></Button>
              </a>
                <a href="https://twitter.com/ngunews">
                <Button variant="light"><i class="bi bi-twitter"><img src={twitter} alt="" /> </i></Button>
                </a>
            
          </ButtonGroup>
          
          </div>
       </header>
        </>
    )
}
