import React from 'react';
import img from '../img/1.jpg';


export const Home = () => {
    return <>
    <section className="tm-welcome-section">
      <div className="container tm-position-relative">
        <div className="tm-lights-container">
          <img src="img/light.png" alt="Light" className="light light-1"/>
          <img src="img/light.png" alt="Light" className="light light-2"/>
          <img src="img/light.png" alt="Light" className="light light-3"/>  
        </div>        
        <div className="row tm-welcome-content">
          <h2 className="white-text tm-handwriting-font tm-welcome-header">
              <img src="img/header-line.png" alt="Line" className="tm-header-line"/><img src="img/header-line.png" alt="Line" className="tm-header-line"/>

              </h2>
          <h2 className="gold-text tm-welcome-header-2">Touch Menu</h2>
          {/* <p className="gray-text tm-welcome-description">Touch Menu is a <span className="gold-text">QR Code</span> based menu ordering system.</p> */}
          <a href="#main" className="tm-more-button tm-more-button-welcome">Details</a>      
        </div>
        <img src="img/table-set.png" alt="Table Set" className="tm-table-set img-responsive"/>
      </div>      
    </section>
    <div className="tm-main-section light-gray-bg">
      <div className="container" id="main">
        <section className="tm-section row">
          <div className="col-lg-9 col-md-9 col-sm-8">
            <h2 className="tm-section-header gold-text tm-handwriting-font">The Best Food for you</h2>
            <h2>Touch Menu</h2>
            <p className="tm-welcome-description">Smart restaurant menu generation using QR code and recommendation using sentiment analysis.</p>
            <a href="#" className="tm-more-button margin-top-30">Read More</a> 
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
            <div className="inline-block shadow-img">
            <img src="img/1.jpg" alt="Image" className="img-circle img-thumbnail"/> 
            </div>              
          </div>            
        </section>          
        <section className="tm-section tm-section-margin-bottom-0 row">
          <div className="col-lg-12 tm-section-header-container">
            <h2 className="tm-section-header gold-text tm-handwriting-font">
                <img src="img/logo.png" alt="Logo" className="tm-site-logo"/> 
                Popular Items</h2>
            <div className="tm-hr-container">
                <hr className="tm-hr"/>

                </div>
          </div>
          <div className="col-lg-12 tm-popular-items-container">
            <div className="tm-popular-item">
              <img src="img/popular-1.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">a</span>mericano</h3>
                <hr className="tm-popular-item-hr"/>
                <p>An Americano is an espresso drink made with hot water and espresso, also called a Caffe Americano. The drink can be made with either one or two shots of espresso, and varying ratios of water. </p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src="img/popular-2.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">c</span>appuccino</h3>
               <hr className="tm-popular-item-hr"/>
                <p>A cappuccino is the perfect balance of espresso, steamed milk and foam. An expertly made cappuccino should be rich, but not acidic and have a mildly sweet flavouring from the milk.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
            <img src="img/popular-3.jpg" alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">m</span>ocha</h3>
                <hr className="tm-popular-item-hr"/>
                <p>Mocha is a high quality type of coffee made from a specific coffee bean. It's easily confused with the flavored drink also called a mocha, which combines coffee and chocolate.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
          </div>          
        </section>
        <section className="tm-section row">
          <div className="col-lg-12 tm-section-header-container">
            <h2 className="tm-section-header gold-text tm-handwriting-font">
               <img src="img/logo.png" alt="Logo" className="tm-site-logo"/>
                Today's Special</h2>
            <div className="tm-hr-container">
                <hr className="tm-hr"/>

            </div>
          </div>          
          <div className="col-lg-12 tm-special-container margin-top-60">
            <div className="tm-special-container-left"> 
              <div className="tm-special-item">
                <div className="tm-special-img-container">
                  <img src="img/special-1.jpg" alt="Special" className="tm-special-img img-responsive"/>
                  <a href="#">
                    <div className="tm-special-description">
                      <h3 className="tm-special-title">Latte</h3>
                      <p>A shot of espresso and steamed milk with just a touch of foam.</p>  
                    </div>            
                  </a>
                </div>
              </div>
            </div>
            <div className="tm-special-container-right"> 
              <div>
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img src="img/special-2.jpg" alt="Special" className="img-responsive"/>
                    <a href="#">
                      <div className="tm-special-description">
                        <h3 className="tm-special-title">Pizza</h3>
                        <p>Surround yourself with pizza, not negativity</p>
                      </div>
                    </a>
                  </div>
                </div>  
              </div>
              <div className="tm-special-container-lower">
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
               <img src="img/special-3.jpg" alt="Special" className="img-responsive"/>
                    <a href="#">
                      <div className="tm-special-description">
                        <p>Lemonade</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img src="img/special-4.jpg" alt="Special" className="img-responsive"/>
                    <a href="#">
                      <div className="tm-special-description">
                        <p>Momos</p>
                      </div>
                    </a>
                  </div>
                </div>  
              </div>              
            </div>
          </div>
        </section>
        <section className="tm-section">
          <div className="row">
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="tm-section-header gold-text tm-handwriting-font">
                  <img src="img/logo.png" alt="Logo" className="tm-site-log"/>
                  Daily Menu</h2> 
              <div className="tm-hr-container">
                  <hr className="tm-hr"/>
                      </div> 
            </div>  
          </div>          
          <div className="row">
            <div className="tm-daily-menu-container margin-top-60">
              <div className="col-lg-4 col-md-4">
               <img src="img/menu-board.png" alt="Menu board" className="tm-daily-menu-img"/> 
              </div>            
              <div className="col-lg-8 col-md-8">
                <p>A festival of flavors</p>
                <ol className="margin-top-30">
                  <li>Chicken Biryani</li> 
                  <li>Awesome Threesome Pizza </li>
                  <li>Paneer Makhani</li> 
                  <li>Mocktail</li> 
                </ol>
                <a href="menu.js" className="tm-more-button margin-top-30">Read More</a>    
              </div>
            </div>
          </div>          
        </section>
      </div>
    </div> 
    </>
}