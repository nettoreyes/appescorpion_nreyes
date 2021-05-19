import React from "react";
import Image from "react-bootstrap/Image";
import IconoCarro from "../img/carro.png";

const CartWidget = (props) => {
  return (
    <Image
      src={IconoCarro} alt="Carro" height="40" className="d-inline-block align-top mx-3"
    />
  );
};

export default CartWidget;
