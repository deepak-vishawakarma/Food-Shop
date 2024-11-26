import React from 'react'
import './Home.css'
import { useState } from 'react'

export default function Home({setAdd}) {

    let [Cart] = useState([
     
      {
        id: 1,
        name: "Signature Burger",
        description: "Juicy beef patty with special sauce",
        price: "$12.99",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHc7MOwhmHD_ZgFX62tY01dA4caTwCm0GZhw&s"
      },
      {
        id: 2,
        name: "Classic Pizza",
        description: "Cheesy goodness with a crispy crust",
        price: "$9.99",
        img: "https://via.placeholder.com/150" // Replace with actual image URL
      },
      {
        id: 3,
        name: "Grilled Chicken Salad",
        description: "Fresh greens with perfectly grilled chicken",
        price: "$10.49",
        img: "https://via.placeholder.com/150" // Replace with actual image URL
      }
    ])

    return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Delicious Meals, <br />Fresh Ingredients</h1>
          <p>Discover culinary magic in every bite</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Order Now</button>
            <button className="btn btn-secondary">View Menu</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://thumbs.dreamstime.com/b/table-full-different-types-food-326844604.jpg" alt="Delicious Food Spread" />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <h2>Explore Our Categories</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1fhpOPIF0Oqrn9hsOp0ejob3g_AgfK7I0Q&s" alt="Pizza" />
            <h3>Pizza</h3>
            <p>Crispy, cheesy, and delicious</p>
          </div>
          <div className="category-item">
            <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="Burger" />
            <h3>Burger</h3>
            <p>Juicy patties, fresh ingredients</p>
          </div>
          <div className="category-item">
            <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Cobb-Salad-main.jpg" alt="Salad" />
            <h3>Salad</h3>
            <p>Fresh and healthy options</p>
          </div>
          <div className="category-item">
            <img src="https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-scaled.jpeg" alt="Dessert" />
            <h3>Dessert</h3>
            <p>Sweet treats to satisfy</p>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="popular-dishes">

        <h2>Most Popular Dishes</h2>

        <div className="dishes-grid">

          {
            Cart.map((e)=>(

              <div className="dish-card">
              <img src={e.img} />
              <div className="dish-details">
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <div className="dish-footer">
                  <span className="price">{e.price}</span>
                  <button className="btn-add" onClick={()=>
                    setAdd(e)
                  }>Add to Cart</button>
                </div>
              </div>
            </div>              

            ))
          }

        </div>
      </section>

      {/* Special Offer */}
      <section className="special-offer">
        <div className="offer-content">
          <h2>Weekend Special Offer</h2>
          <p>50% Off on All Pizzas</p>
          <p>Limited Time Only!</p>
          <button className="btn btn-primary">Claim Offer</button>
        </div>
        <div className="offer-image">
          <img src="https://media.licdn.com/dms/image/v2/D4E12AQFRJFhuaEvkFA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1667399784665?e=1736985600&v=beta&t=Qm2RPndnZVfK5ANOlgJ7qd-KQo5m3fCfkPLmFrrq-Wg" alt="Special Pizza Offer" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Amazing food and quick delivery. Totally recommend!"</p>
            <div className="customer-info">
              <img src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=" alt="Customer" />
              <span>- John Doe</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Best burger in town. Always fresh and delicious!"</p>
            <div className="customer-info">
              <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="Customer" />
              <span>- Jane Smith</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}