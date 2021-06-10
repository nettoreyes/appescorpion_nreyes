import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {

    const [listaCarro, setListaCarro] = useState([]);
    return (
        <CartContext.Provider value={{listaCarro, setListaCarro}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
