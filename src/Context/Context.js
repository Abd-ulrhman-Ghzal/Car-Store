import React, { createContext, useState } from 'react'
import porcha from '../images/porcha2.png'

import porchaS1 from '../images/image Slide pic/porcha/porch-S1.jpg'
import porchaS2 from '../images/image Slide pic/porcha/porch-S2.jpg'
import porchaS3 from '../images/image Slide pic/porcha/porch-S3.jpg'
import porchaS4 from '../images/image Slide pic/porcha/porch-S4.jpg'



import audi from '../images/audi.png'

import audiS1 from '../images/image Slide pic/Audi/Audi-S1.jpg'
import audiS2 from '../images/image Slide pic/Audi/Audi-S2.png'
import audiS3 from '../images/image Slide pic/Audi/Audi-S3.png'
import audiS4 from '../images/image Slide pic/Audi/Audi-S4.jpg'

import bmw from '../images/bmw.png'

import bmwS1 from '../images/image Slide pic/bmw m5/BmwM5-S1.jpg'
import bmwS2 from '../images/image Slide pic/bmw m5/BmwM5-S2.jpg'
import bmwS3 from '../images/image Slide pic/bmw m5/BmwM5-S3.jpg'
import bmwS4 from '../images/image Slide pic/bmw m5/BmwM5-S4.jpg'

import volvo from '../images/stition.png'

import volvoS1 from '../images/image Slide pic/Volvo/volvo-S1.jpg'
import volvoS2 from '../images/image Slide pic/Volvo/volvo-S2.jpg'
import volvoS3 from '../images/image Slide pic/Volvo/volvo-S3.jpeg'
import volvoS4 from '../images/image Slide pic/Volvo/volvo-S4.jpeg'

import bmw2 from '../images/bmw 2.png'

import BmwS1 from '../images/image Slide pic/bmw/bmw-S1.jpg'
import BmwS2 from '../images/image Slide pic/bmw/bmw-S2.jpg'
import BmwS3 from '../images/image Slide pic/bmw/bmw-S3.jpg'
import BmwS4 from '../images/image Slide pic/bmw/bmw-S4.jpg'

export const CartContext=createContext()
export default function Context({children}) {
  const porchaSlider=[porchaS1,porchaS2,porchaS3,porchaS4]
  const audiSlider=[audiS1,audiS2,audiS3,audiS4]
  const bmwM5slider=[bmwS1,bmwS2,bmwS3,bmwS4]
  const volvoSlider=[volvoS1,volvoS2,volvoS3,volvoS4]
  const BmwSlider=[BmwS1,BmwS2,BmwS3,BmwS4]
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
    'SelectedColor':'Black',
    'ImageSlider':porchaSlider
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
    'SelectedColor':'Black',
    'ImageSlider':audiSlider
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
    'SelectedColor':'Black',
    'ImageSlider':bmwM5slider
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
    'SelectedColor':'Black',
    'ImageSlider':volvoSlider
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
    'SelectedColor':'Black',
    'ImageSlider':BmwSlider
  }
]
  

    const storedCartItems = localStorage.getItem('Cart-Items');

const [cartItem,setCartItem]=useState(JSON.parse(storedCartItems) || [])


const DetailRemoveCart = (id, color) => {
  setCartItem(prevCart => {
    const updatedCart = prevCart.filter(item => !(item._id === id && item.SelectedColor === color));
    localStorage.setItem('Cart-Items', JSON.stringify(updatedCart));
    return updatedCart;
  });
};
  return (
    <CartContext.Provider value={{cartItem,setCartItem,DetailRemoveCart,Cars}}>
        {children}
    </CartContext.Provider>
  )
}
