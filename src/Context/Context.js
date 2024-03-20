import React, { createContext, useState } from 'react'
import audi from '../images/audi.png'
import bmw from '../images/bmw.png'
import volvo from '../images/stition.png'
import bmw2 from '../images/bmw 2.png'
import porcha from '../images/porcha2.png'


export const CartContext=createContext()
export default function Context({children}) {
 
  const Cars=[
    {
      "_id":'1',
      "src":porcha,
      "cartype":'Porcha 911 GT3',
      "price":5000,
      "Seator":2,
      "gear":'Automatic',
      "M-Spead":'300 KM/H',
      "EnginCapactiy":'5000CC',
    "color":{
      "Black":'#000000',
      "White":'#ffffff',
      'LightBlue':'#6799D5'
    },
    'SelectedColor':'Black'
    },
    {
    "_id":'2',
    "src":audi,
    "cartype":'AUDI',
    "price":599,
    "Seator":2,
    "gear":'Automatic',
    "M-Spead":'150 KM/H',
    "EnginCapactiy":'3500CC',
    "color":{
      "Black":'#000000',
      "White":'#ffffff',
      'LightBlue':'#6799D5'
    },
    'SelectedColor':'Black'
  },{
    "_id":'3',
    "src":bmw,
    "cartype":'BMW M5',
    "price":699,
    "Seator":4,
    "gear":'Manual',
    "M-Spead":'120 KM/H',
    "EnginCapactiy":'2400CC',
    "color":{
      "Black":'#000000',
      "White":'#ffffff',
      'LightBlue':'#6799D5'
    },
    'SelectedColor':'Black'
  },{
    "_id":'4',
    "src":volvo,
    "cartype":'Volvo',
    "price":399,
    "Seator":5,
    "gear":'Automatic',
    "M-Spead":'100 KM/H',
    "EnginCapactiy":'1800CC',
    "color":{
      "Black":'#000000',
      "White":'#ffffff',
      'LightBlue':'#6799D5'
    },
    'SelectedColor':'Black'
  },{
    "_id":'5',
    "src":bmw2,
    "cartype":'BMW',
    "price":999,
    "Seator":4,
    "gear":'Automatic',
    "M-Spead":'190 KM/H',
    "EnginCapactiy":'4000CC',
    "color":{
      "Black":'#000000',
      "White":'#ffffff',
      'LightBlue':'#6799D5'
    },
    'SelectedColor':'Black'
  }
]
    const [cartItem,setCartItem]=useState([])
    const removeCart = (id) => {
     const removedCar= cartItem.filter(item=>item._id !== id)
      setCartItem(removedCar);
    };
  return (
    <CartContext.Provider value={{cartItem,setCartItem,removeCart,Cars}}>
        {children}
    </CartContext.Provider>
  )
}
