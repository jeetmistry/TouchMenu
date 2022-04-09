import React from 'react';
import img from '../img/1.jpg';

export const Menu = () =>{
    return <>
    <section class="tm-welcome-section">
      <div class="container tm-position-relative">
        <div class="tm-lights-container">
          <img src="img/light.png" alt="Light" class="light light-1"/>
          <img src="img/light.png" alt="Light" class="light light-2"/>
          <img src="img/light.png" alt="Light" class="light light-3"/>  
        </div>        
        <div class="row tm-welcome-content">
          <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line"/>&nbsp;Our Menus&nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line"/></h2>
          <h2 class="gold-text tm-welcome-header-2">Touch Menu</h2>
          <a href="#menu" class="tm-more-button tm-more-button-welcome">Read More</a>      
        </div>
        <img src="img/table-set.png" alt="Table Set" class="tm-table-set img-responsive"/>  
      </div>      
    </section>
    <div class="tm-main-section light-gray-bg">
      <div class="container" id="menu">
        <section class="tm-section row">
          <div class="col-lg-9 col-md-9 col-sm-8">
            <h2 class="tm-section-header gold-text tm-handwriting-font">Variety of Menus</h2>
            <h2>Touch Menu</h2>
            <p class="tm-welcome-description">Life's too short for boring food. <span class="gold-text">Let's eat it.</span> We've got something for everyone.</p>
            <a href="" class="tm-more-button margin-top-30">Read More</a> 
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
            <div class="inline-block shadow-img">
              <img src="img/1.jpg" alt="Image" class="img-circle img-thumbnail"/>  
            </div>              
          </div>            
        </section>          
        <section class="tm-section row">
          <div class="col-lg-12 tm-section-header-container margin-bottom-30">
            <h2 class="tm-section-header gold-text tm-handwriting-font"><img src="img/logo.png" alt="Logo" class="tm-site-logo"/> Our Menus</h2>
            <div class="tm-hr-container"><hr class="tm-hr"/></div>
          </div>
          <div>
            <div class="col-lg-3 col-md-3">
              <div class="tm-position-relative margin-bottom-30">              
                <nav class="tm-side-menu">
                  <ul>
                    <li><a href="#menu1" class="active">Italian</a></li>
                    <li><a href="#" >Indian</a></li>
                    <li><a href="#">Chinese</a></li>
                    <li><a href="#">Mexican</a></li>
                    <li><a href="#">South Indian</a></li>
                    <li><a href="#">Starters</a></li>
                    <li><a href="#">Rice</a></li>
                    <li><a href="#">Non-Veg</a></li>
                    <li><a href="#">Soft Drinks</a></li>
                    <li><a href="#">Desserts</a></li>
                  </ul>              
                </nav>    
                <img src="img/vertical-menu-bg.png" alt="Menu bg" class="tm-side-menu-bg"/>
              </div>  
            </div>            
            <div class="tm-menu-product-content col-lg-9 col-md-9" id="menu1"> 
              <div class="tm-product">
                <img src="img/menu-1.jpg" alt="Product"/>
                <div class="tm-product-text">
                  <h3 class="tm-product-title">Pizza</h3>
                  <p class="tm-product-description">A topping of spicy barbecue sauce, diced chicken, cilantro, peppers, and onion all covered with cheese and baked to bubbly goodness!</p>
                </div>
                <div class="tm-product-price">
                  <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>300</a>
                </div>
              </div>
              <div class="tm-product">
                <img src="img/menu-2.jpg" alt="Product"/>
                <div class="tm-product-text">
                  <h3 class="tm-product-title">Pasta</h3>
                  <p class="tm-product-description">How would you describe pasta?
Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. </p>
                </div>
                <div class="tm-product-price">
                  <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>200</a>
                </div>
              </div>
              <div class="tm-product">
                <img src="img/menu-3.jpg" alt="Product"/>
                <div class="tm-product-text">
                  <h3 class="tm-product-title">Lasagna</h3>
                  <p class="tm-product-description">This classic lasagna is made with an easy meat sauce as the base. Layer the sauce with noodles and cheese, then bake until bubbly! This is great for feeding a big family, and freezes well, too.</p>
                </div>
                <div class="tm-product-price">
                  <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>150</a>
                </div>
              </div>
              <div class="tm-product">
                <img src="img/menu-4.jpg" alt="Product"/>
                <div class="tm-product-text">
                  <h3 class="tm-product-title">Swordfish</h3>
                  <p class="tm-product-description">This buttery Lemon Garlic Swordfish is stunningly delicious. This recipe results in a tender, flavor-packed fish that tastes like you spent way more time on it than you did.</p>
                </div>
                <div class="tm-product-price">
                  <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>250</a>
                </div>
              </div>
              <div class="tm-product">
                <img src="img/menu-5.jpg" alt="Product"/>
                <div class="tm-product-text">
                  <h3 class="tm-product-title">Spaghetti</h3>
                  <p class="tm-product-description">Filipino Spaghetti is the Pinoy version of Spaghetti with meat sauce. This version has a sweet tomato based sauce with lots of meat ingredients such as ground pork, luncheon meat, and hotdogs.</p>
                </div>
                <div class="tm-product-price">
                  <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>275</a>
                </div>
              </div>
            </div>
          </div>          
        </section>
      </div>
    </div> 
    </>
}