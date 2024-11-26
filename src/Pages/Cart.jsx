import React from 'react'
import { useState } from 'react'


export default function Cart({Add}) {
  

   
  return (
        
          <div className="AddedCarts">
              <div>
                <img src={Add.img}/>
                <h1>{Add.name}</h1>
              </div>
         </div>
    
  )
}
