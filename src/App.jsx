import './App.css'
import Navbar from './navbar/Navbar'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductsByid from './product/ProductsByid'
import Footer from './footer/Footer'
import Chicken from './chicken/Chicken'
import ChickenById from './chicken/chickenById'
import Beef from './beef/Beef'
import BeefById from './beef/BeefById'
import VegeById from './vegetarian/VegeById'
import Vegetarian from './vegetarian/Vegetarian'
import Breakfast from './breakfast/Breakfast'
import BfById from './breakfast/BfById'
import Service from './service/Service'
import Cart from './cart/Cart'
import './pages/styles.css'
import SignIn from './authentication/SignIn'
import Signup from './authentication/Signup' 
import { useState } from 'react'
function App() {

         const [isLoggedIn, setIsLoggedIn] = useState(false);
   
  
  return (
   < >
   
   {!isLoggedIn? <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
  </Routes>:
  <div>
   
    <Navbar setIsLoggedIn={setIsLoggedIn}/>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/productsbyid/:id" element={<ProductsByid/>}/>
    <Route path='/chicken' element={<Chicken/>}/>
    <Route path="/chickenbyid/:id" element={<ChickenById/>}/>
    <Route path='/beef' element={<Beef/>}/>
    <Route path="/beefbyid/:id" element={<BeefById/>}/>
    <Route path='/vegetarian' element={<Vegetarian/>}/>
    <Route path="/vegebyid/:id" element={<VegeById/>}/>
    <Route path='/breakfast' element={<Breakfast/>}/>
    <Route path='/bfbyid/:id' element={<BfById/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/cart' element={<Cart/>}/>
   </Routes>
  
      <Footer /> 
      </div>}   
   </>
  )
}

export default App
