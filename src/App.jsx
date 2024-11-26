import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Product from "./Pages/Product"
import Navigetion from "./Component/Navigetion"
import Productinfo from './Pages/Productinfo'
import { useState } from 'react'

export default function App() {

  let [Productlist,Setproductlist] = useState({})
  let [Add,setAdd] = useState({})

  return (
    <div>
      {
        <BrowserRouter>
          <Navigetion/>
        <Routes>

          <Route path = "/" element ={<Home setAdd ={setAdd} />}></Route>
          <Route path = "/Product" element ={<Product  Setproductlist = {Setproductlist} />}></Route>
          <Route path = "/Cart" element ={<Cart Add = {Add} />}></Route>
          <Route path = "/Productinfo" element={<Productinfo  Productlist ={Productlist} />}/>


        </Routes>
        
        
        
        
        </BrowserRouter>
      }
    </div>
  )
}
