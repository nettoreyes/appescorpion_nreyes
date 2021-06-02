import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

const Item = (props) => {
  //{ id, title, price, pictureUrl, initial, stock }
  //const [contador, setContador] = useState(initial);
  // const [botonActivo, setBotonActivo] = useState(true);

  // const eventoClick = (value) => {
  //   // if (stock >= contador + value) {
  //   //   if (contador + value === 0) setContador(1);
  //   //   else setContador(contador + value);

  //   //   setBotonActivo(true);
  //   // } else {
  //   //   setBotonActivo(false);
  //   // }
  // };

  return (
    <div className="col my-2">
      <Card style={{ width: "15rem" }} className=" text-center ">
        {/* <Image variant="top" src={ImagenProducto} /> */}
        <Image variant="top" src="https://picsum.photos/200/250" />
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>${props.item.price}</Card.Text>
          <Link to={`/item/${props.item.id}`} className="btn btn-dark btn-sm">Seleccionar</Link>
          {/* <div className="text-center row mt-2 justify-content-center">
            <button
              className="btn btn-primary btn-sm col-sm-3"
              onClick={() => eventoClick(-1)}
            >
              -
            </button>
            <div className="col-sm-4">{contador}</div>
            <button
              className="btn btn-primary btn-sm col-sm-3"
              onClick={() => eventoClick(1)}
            >
              +
            </button>
            {botonActivo === false ? (
              <div className="alert alert-danger mt-3" role="alert">
                No hay mas Stock
              </div>
            ) : (
              ""
            )}
          </div> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
