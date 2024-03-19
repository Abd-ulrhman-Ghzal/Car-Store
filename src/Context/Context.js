import React, { createContext, useState } from 'react'


export const CartContext=createContext()
export default function Context({children}) {
    const [cartItem,setCartItem]=useState([])
    const removeCart = (id) => {
     const removedCar= cartItem.filter(item=>item._id !== id)
      setCartItem(removedCar);
    };
  return (
    <CartContext.Provider value={{cartItem,setCartItem,removeCart}}>
        {children}
    </CartContext.Provider>
  )
}
