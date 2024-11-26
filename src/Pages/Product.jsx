import React, { useState } from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom';

export default function Product({Setproductlist}) {

  let Naviget = useNavigate()

  let [Products] = useState([
    {
      id: 1,
      name: "Artisan Margherita Pizza",
      description: "Handcrafted pizza with San Marzano tomatoes, fresh mozzarella, and basil",
      photo: "https://img.freepik.com/premium-photo/margherita-pizza-con-funghi-classic-pizza-with-tomato-mozzarella-basil-artisan_921026-35687.jpg",
      category: "Pizza"
    },
    {
      id: 2,
      name: "Organic Quinoa Bowl",
      description: "Protein-packed quinoa bowl with roasted vegetables and herb dressing",
      photo: "https://img.freepik.com/free-photo/fresh-vegetarian-salad-with-organic-quinoa-bowl-generated-by-ai_188544-22893.jpg?t=st=1732606892~exp=1732610492~hmac=872d0cd1ff23c07cd6b44d0986f91ec2fc95811d7a003717b6086c0978c3b244&w=1060",
      category: "Salad"
    },
    {
      id: 3,
      name: "Grilled Salmon Plate",
      description: "Wild-caught salmon with lemon herb seasoning, served with seasonal vegetables",
      photo: "https://melissamayo.com/wp-content/uploads/2016/02/GRILLED-SALMON-NICOISE-PLATTER.jpg",
      category: "Seafood"
    }
  ]);

  return(
    <div className="product-container">
      <h1 className="page-title">Our Delicious Menu</h1>
      <div className="product-grid">
       
        {
          Products.map((e)=>(
            <div key={e.id} className="product-card" onClick={()=>{
              Naviget("/Productinfo")
              Setproductlist(e)
            }}>
              <img src={e.photo} alt={e.name} className="product-image" />
              <div className="product-details">
                <h2 className="product-name">{e.name}</h2>
                <h3 className="product-category">{e.category}</h3>
                <p className="product-description">{e.description}</p>
                <button className="order-button">Order Now</button>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}