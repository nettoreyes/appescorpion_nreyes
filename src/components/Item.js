import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

const Item = (props) => {

  return (
    <div className="col my-2">
      <Card style={{ width: "15rem" }} className=" text-center ">       
        <Image variant="top" src={`https://picsum.photos/id/${props.item.pictureUrl}/200/250`} />
        
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>${props.item.price}</Card.Text>
          <Link to={`/item/${props.item.id}`} className="btn btn-dark btn-sm">Seleccionar</Link>        
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
