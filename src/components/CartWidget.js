import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = (props) => {
  const { cantidadProductos} = useContext(CartContext);
  

  return (

    <Link to={`/cart/`} className="btn btn-md btn-dark px-2 py-1 ">
        <i className="bi bi-cart4 fs-3 text-light align-middle"></i>
        <span className="ms-2 fs-5 px-2 text-light bg-success rounded-circle align-middle">{ cantidadProductos }</span>  
    </Link>
     
  );
};

export default CartWidget;
