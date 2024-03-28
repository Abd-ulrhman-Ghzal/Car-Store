import React, { createContext, useEffect, useState } from 'react'
import pic1 from '../images/cars-thumbnail/1.png'
import pic2 from '../images/cars-thumbnail/2.png'
import pic3 from '../images/cars-thumbnail/3.png'
import pic4 from '../images/cars-thumbnail/4.png'
import pic5 from '../images/cars-thumbnail/5.png'
import pic6 from '../images/cars-thumbnail/6.png'
import pic7 from '../images/cars-thumbnail/7.png'
import pic8 from '../images/cars-thumbnail/8.png'
import pic9 from '../images/cars-thumbnail/9.png'
import pic10 from '../images/cars-thumbnail/10.png'
import pic11 from '../images/cars-thumbnail/11.png'
import pic12 from '../images/cars-thumbnail/12.png'
import pic13 from '../images/cars-thumbnail/13.png'
import pic14 from '../images/cars-thumbnail/14.png'
import pic15 from '../images/cars-thumbnail/15.png'
import pic16 from '../images/cars-thumbnail/16.png'
import pic17 from '../images/cars-thumbnail/17.png'
import pic18 from '../images/cars-thumbnail/18.png'
import pic19 from '../images/cars-thumbnail/19.png'
import pic20 from '../images/cars-thumbnail/20.png'
import pic21 from '../images/cars-thumbnail/21.png'
import pic22 from '../images/cars-thumbnail/22.png'
import pic23 from '../images/cars-thumbnail/23.png'
import pic24 from '../images/cars-thumbnail/24.png'
import pic25 from '../images/cars-thumbnail/25.png'
import pic26 from '../images/cars-thumbnail/26.png'
import pic27 from '../images/cars-thumbnail/27.png'
import pic28 from '../images/cars-thumbnail/28.png'
import pic29 from '../images/cars-thumbnail/29.png'
import pic30 from '../images/cars-thumbnail/30.png'


import S1 from '../images/Rectangle 46.png'
import S2 from '../images/Rectangle 47.png'
import S3 from '../images/Rectangle 48.png'
import S4 from '../images/Rectangle 49.png'

export const CartContext=createContext()
export default function Context({children}) {
 
  //   const Cars=[
  //     {
  //       "_id":'1',
  //       "src":porcha,
  //       'Name':'Porsche',
  //       "cartype":'Porsche 718 Cayman GT4 RS',
  //       "price":5000,
  //       "Seator":2,
  //       "gear":'Automatic',
  //       "M-Spead":'300 KM/H',
  //       "EnginCapactiy":'5000CC',
  //     "color":{
  //       "Black":'#000000',
  //       "White":'#ffffff',
  //       'LightBlue':'#6799D5'
  //     },
  //     'SelectedColor':'Black',
  //     'ImageSlider':porchaSlider1
  //     },
  //     {
  //     "_id":'2',
  //     "src":audi,
  //     'Name':'AUDI',
  //     "cartype":'AUDI',
  //     "price":599,
  //     "Seator":2,
  //     "gear":'Automatic',
  //     "M-Spead":'150 KM/H',
  //     "EnginCapactiy":'3500CC',
  //     "color":{
  //       "Black":'#000000',
  //       "White":'#ffffff',
  //       'LightBlue':'#6799D5'
  //     },
  //     'SelectedColor':'Black',
  //     'ImageSlider':audiSlider
  //   },{
  //     "_id":'3',
  //     "src":bmw,
  //     'Name':'BMW',
  //     "cartype":'BMW M5',
  //     "price":699,
  //     "Seator":4,
  //     "gear":'Manual',
  //     "M-Spead":'120 KM/H',
  //     "EnginCapactiy":'2400CC',
  //     "color":{
  //       "Black":'#000000',
  //       "White":'#ffffff',
  //       'LightBlue':'#6799D5'
  //     },
  //     'SelectedColor':'Black',
  //     'ImageSlider':bmwM5slider
  //   },{
  //     "_id":'4',
  //     "src":volvo,
  //     'Name':'Volvo',
  //     "cartype":'Volvo',
  //     "price":399,
  //     "Seator":5,
  //     "gear":'Automatic',
  //     "M-Spead":'100 KM/H',
  //     "EnginCapactiy":'1800CC',
  //     "color":{
  //       "Black":'#000000',
  //       "White":'#ffffff',
  //       'LightBlue':'#6799D5'
  //     },
  //     'SelectedColor':'Black',
  //     'ImageSlider':volvoSlider
  //   },{
  //     "_id":'5',
  //     "src":bmw2,
  //     'Name':'BMW',
  //     "cartype":'BMW',
  //     "price":999,
  //     "Seator":4,
  //     "gear":'Automatic',
  //     "M-Spead":'190 KM/H',
  //     "EnginCapactiy":'4000CC',
  //     "color":{
  //       "Black":'#000000',
  //       "White":'#ffffff',
  //       'LightBlue':'#6799D5'
  //     },
  //     'SelectedColor':'Black',
  //     'ImageSlider':BmwSlider
  //   },
  //   {
  //     "_id":'6',
  //     "src":porcha2,
  //     'Name':'Porsche',
  //     "cartype":'Porsche 911 GT3',
  //     "price":1499,
  //     "Seator":2,
  //     "gear":'Automatic',
  //     "M-Spead":'220 KM/H',
  //     "EnginCapactiy":'3500CC',
  //     "color":{
  //       "Black":'#000000',
  //       "White":'#ffffff',
  //       'LightBlue':'#6799D5'
  //     },
  //     'SelectedColor':'Black',
  //     'ImageSlider':porchaSlider2
  //   }
  // ]
  
  
  const storedCartItems = localStorage.getItem('Cart-Items');
  const [cartItem,setCartItem]=useState(JSON.parse(storedCartItems) || [])
  const [Cars,setCars]=useState([])
  const [selectedCarName,setSelectedCarName]=useState(null)
  const [selectedCarBrand,setSelectedCarBrand]=useState(null)
  
  
  const images=[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10
  ,pic11,pic12,pic13,pic14,pic15,pic16,pic17,pic18,pic19,pic20,
  pic21,pic22,pic23,pic24,pic25,pic26,pic27,pic28,pic29,pic30]

  const ImageSlider=[S1,S2,S3,S4]

  useEffect(()=>{
    const fetchData=async(query='')=>{
      const apiUrl = "https://freetestapi.com/api/v1/cars";
      const searchQuery = query ? "?search=" + encodeURIComponent(query) : "";
      const url = apiUrl + searchQuery;
      try{
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("HTTP error! Status:" + response.status);
        }
        const Cars = await response.json();
        const carsWithImages = Cars.map((car, index) => ({
          ...car,
          image: images[index % images.length], // Modulo operation to cycle through images if cars exceed images length
          ImageSlider:ImageSlider 
      }));

      setCars(carsWithImages);
        }
      catch{
        console.log('error')
      }
      if(selectedCarName){
        fetchData('make')
      }else if(selectedCarBrand){
        fetchData('model')
      }
    }
    fetchData()
  }
  ,[])
 

    
    
   

  let filterdCarName = Cars
  
  if (selectedCarName && selectedCarBrand) {
    filterdCarName = Cars.filter((car) => car.make === selectedCarName.value && car.model === selectedCarBrand.value);
  } else if (selectedCarName) {
    filterdCarName = Cars.filter((car) => car.make === selectedCarName.value);
  } else if (selectedCarBrand) {
    filterdCarName = Cars.filter((car) => car.model === selectedCarBrand.value);
  }
  console.log(filterdCarName)
  // carname
  
  const CarsName=Array.from(new Set(Cars.map((e)=>e.make)))
  const CarsNameOptions=CarsName.map((CarName)=>({
       label:CarName,
       value:CarName
  }))
  // price
  

  //Engin


  //brand
  
  const CarsBrand=Array.from(new Set(filterdCarName.map((e)=>e.model)))
  const CarsBrandOptions=CarsBrand.map((CarBrand)=>(
    {
      label:CarBrand,
      value:CarBrand
 }
  ))

  //  filtering
  



  

 



const DetailRemoveCart = (id, color) => {
  setCartItem(prevCart => {
    const updatedCart = prevCart.filter(item => !(item.id === id && item.SelectedColor === color));
    localStorage.setItem('Cart-Items', JSON.stringify(updatedCart));
    return updatedCart;
  });
};
  return (
    <CartContext.Provider value={{cartItem,setCartItem,DetailRemoveCart,Cars,selectedCarName,setSelectedCarName,filterdCarName,CarsNameOptions,CarsBrandOptions,setSelectedCarBrand,selectedCarBrand}}>
        {children}
    </CartContext.Provider>
  )
}
