import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
//import ImagenProducto from "../img/444017.png";
// import Image from "react-bootstrap/Image";

const ItemCount = ({ initial, stock, terminarCompra }) => {
  const [contador, setContador] = useState(initial);
  const [botonActivo, setBotonActivo] = useState(true);

  const eventoClick = (value) => {
    if (stock >= contador + value) {
      if (contador + value === 0) 
          setContador(1);
      else 
        setContador(contador + value);

      setBotonActivo(true);
    } else {
      setBotonActivo(false);
    }
  };

  return (
    <div className="container border border-light my-3 py-3">
      <div className="text-center row mt-2 justify-content-center">
        <button className="btn btn-primary btn-sm col-1" onClick={() => eventoClick(-1)}>-</button>
        <div className="col-2">{contador}</div>
        <button className="btn btn-primary btn-sm col-1" onClick={() => eventoClick(1)}>+</button>
        {botonActivo === false ? (
          <div className="alert alert-danger mt-3" role="alert">
            No hay mas Stock
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="text-center row mt-2 justify-content-center">
        <button className="btn btn-danger btn-sm col-4" onClick={() => terminarCompra(true, contador)}>Agregar al Carro </button>
      </div>
    </div>

    // <Card  className="text-center w-100">
    //   {/* <Image variant="top" src={ImagenProducto} /> */}
    //   {/* <Image variant="top" src="https://picsum.photos/200/250" /> */}
    //   <Card.Body>
    //     {/* <Card.Title>Producto A</Card.Title>
    //     <Card.Text>Producto tipo etc.</Card.Text> */}

    //     <div className="text-center row mt-2 justify-content-center">
    //       <button className="btn btn-primary btn-sm col-sm-3" onClick={() => eventoClick(-1)}>-</button>
    //       <div className="col-sm-4">{contador}</div>
    //       <button className="btn btn-primary btn-sm col-sm-3" onClick={() => eventoClick(1)} >+</button>
    //       {
    //       botonActivo === false ?
    //       <div className="alert alert-danger mt-3" role="alert">No hay mas Stock</div>
    //       :
    //       ''
    //       }
    //     </div>
    //   </Card.Body>
    // </Card>
  );
};

export default ItemCount;
