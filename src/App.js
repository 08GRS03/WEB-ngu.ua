import Header from "./componets/Header/Header"
import Menu from "./componets/Menu/Menu"
import MyCarousel from "./componets/MyCarousel/MyCarousel"
import Cards from "./componets/Cards/Cards";
import CarouselFotos from "./componets/CarouselFotos/CarouselFotos";
import CarouselWeb from "./componets/CarouselWeb/CarouselWeb";
import Footer from "./componets/Footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";



function App() {
  return (
      <>
      <Header/>
       <Menu/>
       <MyCarousel/>
       <Cards/>
       <CarouselFotos/>
       <CarouselWeb/>
       <Footer/>
      </>
  );
}

export default App;
