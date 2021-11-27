import Header from "./componets/Header/Header"
import Menu from "./componets/Menu/Menu"
import MyCarousel from "./componets/MyCarousel/MyCarousel"
import Cards from "./componets/Cards/Cards";
import CarouselFotos from "./componets/CarouselFotos/CarouselFotos";
import CarouselWeb from "./componets/CarouselWeb/CarouselWeb";
import Footer from "./componets/Footer/Footer";
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Kerivnuku from "./componets/Kerivnuku/Kerivnuku";



function App() {
  return (
      <Router>
        <Header/>
        <Menu/>
        <Switch>
        <Route exact  path='/'>
            <MyCarousel/>
            <Cards/>
            <CarouselFotos/>
            <CarouselWeb/>
        </Route>
        <Route exact  path='/kerivn'>
            <Kerivnuku/>
        </Route>
        </Switch>

        <Footer/>
      </Router>
  );
}

export default App;
