import React, { createContext, useState } from 'react'


export const CartContext=createContext()
export default function Context({children}) {
    const [cartItem,setCartItem]=useState([])
  return (
    <CartContext.Provider value={{cartItem,setCartItem}}>
        {children}
    </CartContext.Provider>
  )
}
