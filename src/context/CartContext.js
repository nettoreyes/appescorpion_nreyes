import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {

    const [listaCarro, setListaCarro] = useState([]);

    const AgregarCarro = (item) => {    
        
        const existe = listaCarro.find(x=>x.idProducto === item.idProducto);
        if(existe === undefined){
            setListaCarro([...listaCarro, item]);      
            return false;
        }
        else
            return true;
      };



    return (
        <CartContext.Provider value={{listaCarro, setListaCarro, AgregarCarro }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
