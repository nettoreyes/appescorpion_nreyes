import React from 'react'
import Image from 'react-bootstrap/Image'
import logo from '../img/logo.png';
import IconoCarro from '../img/carro.png';

const CartWidget = (props) => {
    return (
        <Image src={ props.imagen === "logo"  ? logo : IconoCarro} alt="Logo" className="d-inline-block align-top mx-3" />
    );
}

export default CartWidget
