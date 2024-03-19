import React, { createContext, useState } from 'react'


export const CartContext=createContext()
export default function Context({children}) {
    const [cartItem,setCartItem]=useState([])
    const removeCart = (id) => {
      setCartItem(oldData => oldData.splice(id,1));

    };
  return (
    <CartContext.Provider value={{cartItem,setCartItem,removeCart}}>
        {children}
    </CartContext.Provider>
  )
}
