import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { listaCarro } = useContext(CartContext);
  let linea = 0;
  if (listaCarro.length > 0) {
    return (
      <div className="container mt-5">
        <h1>Lista de compra</h1>
        
            <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>              
                <th scope="col">Detalle</th>
                <th scope="col" className="text-end">Precio</th>
                <th scope="col" className="text-end">Cantidad</th>              
                <th scope="col" className="text-end">Total</th>              
                </tr>
            </thead>
            <tbody>
            {
                
                listaCarro.map((item) => (
                    <tr>
                        <th scope="row">{ linea+=1 } </th>                
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                        <td className="text-end">{item.cantidad}</td>                
                        <td className="text-end">{item.cantidad * item.price}</td>
                    </tr>  
                ))
            }          
            </tbody>
            </table>
        
      </div>
    );
  } else {
    return (<h1>Carro Vacio</h1>);
  }
};

export default Cart;
