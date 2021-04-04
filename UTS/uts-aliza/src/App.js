import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { faHome, faShoppingCart, faAddressCard, faShoppingBag, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RiceCooker from './container/Rice/RiceCooker';
import Keranjang from './container/Rice/Keranjang';
import Aboutt from './container/Rice/about';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid" >
          <a class="navbar-brand" href="/">Toko Sebelah</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-icon"><FontAwesomeIcon icon={faHome} /></li>
            <li class="nav-item"><Link to="/">Home</Link></li>
            <li class="nav-icon"><FontAwesomeIcon icon={faShoppingBag} /></li>
            <li class="nav-item"><Link to="/listproduct">List Product</Link></li>
            <li class="nav-icon"><FontAwesomeIcon icon={faShoppingCart} /></li>
            <li class="nav-item"><Link to="/keranjang">Cart</Link></li>
            <li class="nav-icon"><FontAwesomeIcon icon={faAddressCard} /></li>
            <li class="nav-item"><Link to="/about">About</Link></li>
          </ul>
       </div>
      </div>
    </nav>
    <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/listproduct"><ListProduct /></Route>
          <Route exact path="/keranjang"><Cart /></Route>
    </Switch>
    
    </Router>
  );
}

function Home(){
  return(
    <div class="jumbotron jumbotron-fluid text-center bg-warning">
          <div class="icon">
          <FontAwesomeIcon icon={faStore}/>
          </div>
          <h1 styles="font-size: 200px">TOKO SEBELAH OFFICIAL STORE</h1>
          <h2>WELCOME TO OUR STORE!</h2>
            <p>DAPATKAN DISKON BESAR-BESARAN DAN RIBUAN GRATIS ONGKIR DI BULAN APRIL</p>
    </div>
  );
}

function About(){
  return(
    <Aboutt/>
  );
}

function ListProduct(){
  return(
    <RiceCooker/>
  );
}

function Cart(){
  return(
    <Keranjang/>
  );
}
export default App;
