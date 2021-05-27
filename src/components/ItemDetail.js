import React from 'react'
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ title, price, descripcion }) => {
    return (
        <div className="col my-2">
        <Card className=" text-center w-50">
          {/* <Image variant="top" src={ImagenProducto} /> */}
          <Image variant="top" src="https://picsum.photos/60" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Title>${price}</Card.Title>
            <Card.Text>${descripcion}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default ItemDetail
