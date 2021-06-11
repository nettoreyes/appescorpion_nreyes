import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { listaCarro, EliminaItem } = useContext(CartContext);
  let linea = 0;
  let totalFinal=0;

  for(const item of listaCarro){
     item.totalLinea = item.cantidad * item.price;
     totalFinal += item.totalLinea;
  }

  if (listaCarro.length > 0) {
    return (
      <div className="container mt-5">
        <h1>Lista de compra</h1>

        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Detalle</th>
              <th scope="col" className="text-end">
                Precio
              </th>
              <th scope="col" className="text-end">
                Cantidad
              </th>
              <th scope="col" className="text-end">
                Total
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              listaCarro.map((item) => (
                <tr key={item.idDetalle}>
                  <th scope="row">{(linea += 1)} </th>
                  <td>{item.title}</td>
                  <td className="text-end">{item.price}</td>
                  <td className="text-end">{item.cantidad}</td>
                  <td className="text-end">{item.totalLinea}</td>
                  <td className="text-center"><button className="btn btn-danger btn-sm px-2" onClick={() => EliminaItem(item.idProducto)} > X </button></td>
                </tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col" className="text-end"></th>
              <th scope="col" className="text-end">Total</th>
              <th scope="col" className="text-end">${totalFinal}</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
        <Link to={`/`} className="btn btn-primary btn-sm">Seguir comprando</Link>
        
      </div>
    );
  } else {
    return (
    <div className="container m-5">
      <h1>Carro Vacio</h1>
      <Link to={`/`} className="btn btn-primary btn-sm">Volver</Link>
    </div>
    );
  }
};

export default Cart;
