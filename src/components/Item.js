import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

const Item = (props) => {

  return (
    <div className="col text-center py-2">
      <div className="container">
        <Card style={{ width: "16rem" }} className="text-center p-2">               
          <Image variant="top" src={`${props.item.image}/200/250`} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text>${props.item.price}</Card.Text>
            <Link to={`/item/${props.item.id}`} className="btn btn-dark btn-sm">Seleccionar</Link>        
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Item;
