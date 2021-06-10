import React, {useState, useContext} from "react";
import Image from "react-bootstrap/Image";
import ItemCount from "./ItemCount";
// import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = (props) => {
  const [terminarCompraVisible, setTerminarCompraVisible] = useState(false)
  const [cantidad, setCantidad] = useState(0)
  const { listaCarro, setListaCarro } = useContext(CartContext);

  const TerminaCompra = (visible, cant) => {
    setTerminarCompraVisible(visible)
    setCantidad(Number(cant))    
  }

  const AgregarCarro = () => {
    const producto = {
        idDetalle: listaCarro.length + 1,
        idProducto: props.item.id ,
        title: props.item.title,
        price: props.item.price,
        pictureUrl: props.item.pictureUrl,
        cantidad: cantidad
      };
      setListaCarro([...listaCarro, producto]);      
  };

  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center"> 
          <Image variant="top" className="img-fluid" src={`https://picsum.photos/id/${props.item.pictureUrl === undefined ? 0 : props.item.pictureUrl}/500/500`}/>
        </div>
        <div className="col-12 col-md-6"> 
            <h2 className="display-5">{props.item.title}</h2>
            <h3 className="">${props.item.price}</h3>
            <p className="lead">{props.item.descripcion}</p>

            { cantidad > 0 ? <p className="lead fw-bold">Cantidad Seleccionada: {cantidad}</p> : <ItemCount initial={1} stock={3} terminarCompra={TerminaCompra} /> }
             
            { terminarCompraVisible ?  <button className="btn btn-dark btn-sm" onClick={() => AgregarCarro()}>Terminar Compra</button>  : '' }
            
            {/* <Link to={`/cart/`} className="btn btn-dark btn-sm">Terminar Compra</Link>  */}
        </div>
        
      </div>     
    </div>
  );
};

export default ItemDetail;
