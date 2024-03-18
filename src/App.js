import './App.css';
import NavBar from './componnents/NavBar';
import Mainpage from './componnents/main-page-components/Mainpage';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Cart from './componnents/cart-details-components/Cart';
import CarDetails from './componnents/car-details/CarDetails';
import Contextprovider from './Context/Context';

function App() {
  return (
    <>
    <BrowserRouter>
      <Contextprovider>
      <NavBar/>
       <Routes>
        
        <Route path='/Car-Store' element={<Mainpage/>}/>
        
        <Route path='/Car-Store/Cart-Order' element={<Cart/>}/>
        
        <Route path='/Car-Store/Car-Detail' element={<CarDetails/>}/>
       </Routes>
       </Contextprovider>
    </BrowserRouter>
      
    </>
  );
}

export default App;
