import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PiePagina from "./components/PiePagina";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/"><ItemListContainer /></Route>
        <Route exact path="/cart"><ItemDetailContainer /></Route>
      </Switch>
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      <PiePagina />
    </BrowserRouter>
    
  );
}

export default App;
