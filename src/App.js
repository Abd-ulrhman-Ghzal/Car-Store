import './App.css';
import NavBar from './componnents/NavBar';
import Mainpage from './componnents/main-page-components/Mainpage';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Cart from './componnents/cart-details-components/Cart';
import CarDetails from './componnents/car-details/CarDetails';
import { useContext, useEffect } from 'react';
import { CartContext } from './Context/Context';

function App() {
  const {cartItem,filterdCarName}=useContext(CartContext)
  

  useEffect(()=>{
    localStorage.setItem('Cart-Items',JSON.stringify(cartItem))
  },[cartItem])
  
  return (
    <>
    <BrowserRouter>
      
      <NavBar/>
       <Routes>
        
        <Route path='/Car-Store' element={<Mainpage/>}/>
        
        <Route path='/Car-Store/Cart-Order' element={<Cart/>}/>
        
        {filterdCarName.map((e,index)=>{
          return <Route key={index} path={`/Car-Store/Car-Detail/${e.make} ${e.model}`} element={<CarDetails src={e.image} Cartype={`${e.make} ${e.model}`} Price={e.price} EnginCapactiy={e.horsepower} ImageSlider={e.ImageSlider} id={e.id}  />}/>
        })}
        
       </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
