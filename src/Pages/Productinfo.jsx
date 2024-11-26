import React from 'react'
import { useState } from 'react'
import "./Productinfo.css"

export default function Productinfo({Productlist}) {

    let [Proinfo] = useState([

        {
          id: 1,
          name: "Artisan Margherita Pizza",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia minus pariatur esse eos ducimus totam veniam voluptate, minima, cumque reiciendis sit est magnam aliquid nihil. Dignissimos, in expedita! Reiciendis exercitationem debitis quod neque numquam laudantium quas sint incidunt! Sed, sint. Saepe vitae deleniti aliquid alias vero. Neque, omnis esse?",
          photo: "https://img.freepik.com/premium-photo/margherita-pizza-con-funghi-classic-pizza-with-tomato-mozzarella-basil-artisan_921026-35687.jpg",
          category: "Pizza",
          price: 14.99,
          preparationTime: "12-15 minutes",
          
        
        },
        {
          id: 2,
          name: "Quattro Formaggi Pizza",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia minus pariatur esse eos ducimus totam veniam voluptate, minima, cumque reiciendis sit est magnam aliquid nihil. Dignissimos, in expedita! Reiciendis exercitationem debitis quod neque numquam laudantium quas sint incidunt! Sed, sint. Saepe vitae deleniti aliquid alias vero. Neque, omnis esse?",
          photo: "https://img.freepik.com/free-photo/four-cheese-pizza-with-different-types-cheese_141793-860.jpg",
          category: "Pizza",
          price: 16.99,
          preparationTime: "15-18 minutes",
          
        },
        {
          id: 3,
          name: "Organic Quinoa Bowl",
          description: "Protein-packed quinoa bowl with roasted vegetables and herb dressing",
          photo: "https://img.freepik.com/free-photo/fresh-vegetarian-salad-with-organic-quinoa-bowl-generated-by-ai_188544-22893.jpg?t=st=1732606892~exp=1732610492~hmac=872d0cd1ff23c07cd6b44d0986f91ec2fc95811d7a003717b6086c0978c3b244&w=1060",
          category: "Salad",          
          price: 12.50,
          preparationTime: "10-12 minutes",
          
        },
        {
          id: 4,
          name: "Mediterranean Chicken Salad",
          description: "Fresh mixed greens with grilled chicken, feta, olives, and citrus vinaigrette",
          photo: "https://img.freepik.com/free-photo/grilled-chicken-salad-with-fresh-vegetables_2829-10657.jpg",
          category: "Salad",
          price: 14.99,
          preparationTime: "12-15 minutes",
          
        },
        {
          id: 5,
          name: "Grilled Salmon Plate",
          description: "Wild-caught salmon with lemon herb seasoning, served with seasonal vegetables",
          photo: "https://melissamayo.com/wp-content/uploads/2016/02/GRILLED-SALMON-NICOISE-PLATTER.jpg",
          category: "Seafood",
          price: 19.99,
          preparationTime: "15-18 minutes",
          
        },
        {
          id: 6,
          name: "Seafood Paella",
          description: "Traditional Spanish rice dish with a mix of fresh seafood, saffron, and vegetables",
          photo: "https://img.freepik.com/free-photo/seafood-paella-traditional-spanish-dish_2829-14177.jpg",
          category: "Seafood",
          price: 22.99,
          preparationTime: "20-25 minutes",
          
        }
      ])

      let Show = Proinfo.filter((e)=> e.category === Productlist.category)

  return (
    <div>
      {
        Show.map((c)=>(
          <div className="Card">
              <div className="Container">
                  <img src={c.photo} alt={c.name} />
                  <h1>{c.name}</h1>
                  <h3>{c.category}</h3>
                  <p className="price">Price: {c.price}</p>
                  <p className="preparationTime">Preparation Time: {c.preparationTime}</p>
                  <p className="description">{c.description}</p>
              </div>
          </div>
        ))}
    </div>
  )
}
