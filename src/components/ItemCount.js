import React, { useState, Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ImagenProducto from "../img/444017.png";
import Image from "react-bootstrap/Image";

const ItemCount = ({ initial, stock }) => {
  
  const [contador, setContador] = useState(initial);  
  const [botonActivo, setBotonActivo] = useState(true);  

  const eventoClick = (value) => {
    if (stock >= contador + value) {
      if(contador + value === 0)
        setContador(1);
      else
        setContador(contador + value);
      
      setBotonActivo(true);
    }
    else{
      setBotonActivo(false);
    }

  };

  return (
    <Card style={{ width: "13rem" }} className="text-center">
      <Image variant="top" src={ImagenProducto} />
      <Card.Body>
        <Card.Title>Producto A</Card.Title>
        <Card.Text>Producto tipo etc.</Card.Text>

        <td className="text-center row mt-2 justify-content-center">
          <button className="btn btn-primary btn-sm col-sm-3" onClick={() => eventoClick(-1)}>-</button>
          <div className="col-sm-4">{contador}</div>
          <button className="btn btn-primary btn-sm col-sm-3" onClick={() => eventoClick(1)} >+</button>
          { 
          botonActivo === false ?
          <div className="alert alert-danger mt-3" role="alert">No hay mas Stock</div>
          : 
          ''
          }
        </td>
      </Card.Body>
    </Card>
  );
};

export default ItemCount;
