import React from 'react'
import "./Navigetion.css"
import { Link } from 'react-router-dom'

export default function Navigetion() {
  return (
    <div className='Navigetion'>
        
        <div className='Logo'>
            <h1>Logo</h1>
        </div>

        <div className='Input'>
            <input type="text" placeholder='Search....' />
            <button>Search</button>
        </div>

        <ul className='Info' >
           <li><Link to ="/">Home</Link></li>
           <li><Link to ="/Product">Product</Link></li>
           <li><Link to ="/Cart">Cart</Link></li>
        </ul>

      
    </div>
  )
}
