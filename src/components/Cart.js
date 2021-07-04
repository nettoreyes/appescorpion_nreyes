import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { listaCarro, eliminaItem } = useContext(CartContext);
  
  let totalFinal = 0;

  for (const item of listaCarro) {
    item.totalLinea = item.cantidad * item.price;
    totalFinal += item.totalLinea;
  }

  if (listaCarro.length > 0) {
    return (
      <div className="container mt-5">
        <h1>Lista de compra</h1>
        <div className="container">
        {
        listaCarro.map((item) => (
          <div className="row pb-2 my-1 align-items-center border border-success rounded-3 g-2" key={item.idDetalle}>            
            <div className="col-12 col-md-2 text-center">
              <Image variant="top" src={`${item.image}/100`} />
            </div>
            <div className="col-12 col-md-8 ">
              <div className="row p-1 p-md-3 align-items-center g-1">
                <div className="col-12 text-start fw-bold">{item.title}</div>                
                <div className="w-100 d-none d-md-block"></div>
                <div className="col-3 text-start"> $ { item.price.toLocaleString('de-DE') } c/u</div>
                <div className="col-6 text-center">                  
                  <span className="mx-md-2"> {item.cantidad} </span>
                </div>
                <div className="col-3 text-end fw-bold"> ${item.totalLinea.toLocaleString('de-DE')} </div>

              </div>
            </div>
            <div className="col-12 col-md-2 text-sm-start text-md-center align-self-end"><button className="btn btn-danger btn-sm" onClick={() => eliminaItem(item.idProducto)}>Eliminar</button></div>
          </div>
        ))
        }
        </div>
        <div className="container">
          <div className="row g2 p-1 align-items-center justify-content-end rounded-3">
            <div className="col-12 col-md-3 text-center text-md-start">
              <Link to={`/`} className="btn btn-primary btn-sm">Seguir comprando</Link>
            </div>
            <div className="col-12 col-md-3 mt-1 text-center text-md-end">
              <h3>Total : ${ totalFinal.toLocaleString('de-DE') }</h3>
            </div>
            <div className="col-12 col-md-2 mt-1 text-center">
              <Link to={`/buyer`} className="btn btn-success btn-sm">Terminar Compra</Link>
            </div>
          </div>
        </div>

        
        </div>
    );
  } else {
    return (
      <div className="container m-5">
        <h1>Carro Vacio</h1>
        <Link to={`/`} className="btn btn-primary btn-sm">
          Volver
        </Link>
      </div>
    );
  }
};

export default Cart;
