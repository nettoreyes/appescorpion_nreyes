import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PiePagina from "./components/PiePagina";
import Cart from "./components/Cart";
import Buyer from "./components/Buyer";
import CartProvider from "./context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/"><ItemListContainer /></Route>
          <Route path="/category/:id"><ItemListContainer /></Route>
          <Route path="/item/:id"><ItemDetailContainer /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/buyer"><Buyer /></Route>
        </Switch>        
        <PiePagina />
      </BrowserRouter>
    </CartProvider>    
  );
}

export default App;
