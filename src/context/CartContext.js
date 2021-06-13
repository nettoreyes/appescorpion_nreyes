import React, { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const CartProvider = (props) => {
  const [listaCarro, setListaCarro] = useState([]);
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const agregarCarro = (item) => {  
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

  const eliminaItem = (idProducto) => {

    //console.log(typeof(idProducto))

    Swal.fire({
      title: idProducto === 0 ? 'Vaciar Carro' : 'Eliminar',
      text: idProducto === 0 ? "Esta seguro de vaciar el carro" : "Esta seguro de eliminar el producto?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        if(idProducto === "0"){
          setListaCarro([]);
          setCantidadProductos(0);
        }
        else{
          const listaFiltrada = listaCarro.filter(x=>x.idProducto !== idProducto);
          setListaCarro(listaFiltrada);

          let cantidadTotal = 0;
          for(const item of listaFiltrada){    
              cantidadTotal += item.cantidad; 
          }
          setCantidadProductos(cantidadTotal);
        }

          Swal.fire(
              idProducto === 0 ? 'Sin Productos' : 'Eliminado!',
              idProducto === 0 ? 'Carro Vacio' : 'Producto Eliminado',
              'success'
          );          
      }
    });   













    
  };

  return (
    <CartContext.Provider value={{ listaCarro, setListaCarro, agregarCarro, eliminaItem, cantidadProductos }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
