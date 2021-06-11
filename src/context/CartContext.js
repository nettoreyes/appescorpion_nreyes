import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [listaCarro, setListaCarro] = useState([]);
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const AgregarCarro = (item) => {
    
    //para el calculo de cantidad de productos
    let cantidadTotal = item.cantidad;//inicio con la cantidad que trae el producto
    for(const item of listaCarro){    
        cantidadTotal += item.cantidad; //agrego las cantidades que ya existen
    }
    setCantidadProductos(cantidadTotal);

    //verifico si el producto ya esta agregado
    const existe = listaCarro.find((x) => x.idProducto === item.idProducto);

    //si no existe , lo agrego, de lo contrario solo aumento sus cantidades
    if (existe === undefined) {
      setListaCarro([...listaCarro, item]);
      //return false;
    } else {
       
      for (let prod of listaCarro) {
        if (prod.idProducto === item.idProducto) {
          prod.cantidad += item.cantidad;
          break;
        }
      }      //return true;
    }

  };

  const EliminaItem = (idProducto) => {
      //console.log(idProducto)
    const listaFiltrada = listaCarro.filter(x=>x.idProducto !== idProducto);
    setListaCarro(listaFiltrada);
    setCantidadProductos(listaFiltrada.length);
  };

  return (
    <CartContext.Provider value={{ listaCarro, setListaCarro, AgregarCarro, EliminaItem, cantidadProductos }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
