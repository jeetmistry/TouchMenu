import React from 'react';
import img from '../img/1.jpg';


export const Base = ({children, setTabId}) => {
    return <>
    {/* <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div> */}
    {/* <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> */}
    <div className="tm-top-header">
      <div classNameName="container">
        <div className="row">
          <div className="tm-top-header-inner">
            <div className="tm-logo-container">
              <img src="img/logo.png" alt="Logo" className="tm-site-logo"/>
              <h1 className="tm-site-name tm-handwriting-font">Touch Menu</h1>
            </div>
            <div className="mobile-menu-icon">
              <i className="fa fa-bars"></i>
            </div>
            <nav className="tm-nav">
              <ul>
                <li><a onClick={(e) => setTabId(0)} className="active">Home</a></li>
                <li><a onClick={(e) => setTabId(1)}>Menu</a></li>
                <li><a onClick={(e) => setTabId(2)}>Contact</a></li>
                <li><a onClick={(e) => setTabId(3)}>Login</a></li>
              </ul>
            </nav>   
          </div>           
        </div>    
      </div>
    </div>
    {children   }
    <footer>
      <div className="tm-black-bg">
        <div className="container">
          <div className="row margin-bottom-60">
            <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
              <h3 className="tm-footer-div-title">Main Menu</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Directory</a></li>
                <li><a href="#">Blog</a></li>
                {/* <li><a href="#">Our Services</a></li> */}
              </ul>
            </nav>
            <div className="col-lg-5 col-md-5 tm-footer-div">
              <h3 className="tm-footer-div-title">About Us</h3>
              <p className="margin-top-15">Smart restaurant menu generation using QR code and recommendation using sentiment analysis.</p>
              {/* <p className="margin-top-15">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p> */}
            </div>
            <div className="col-lg-4 col-md-4 tm-footer-div">
              <h3 className="tm-footer-div-title">Get Social</h3>
              <p>Connect us on our social media pages.</p>
              <div className="tm-social-icons-container">
                <a href="#" className="tm-social-icon"><i className="fa fa-facebook"></i></a>
                <a href="#" className="tm-social-icon"><i className="fa fa-twitter"></i></a>
                <a href="#" className="tm-social-icon"><i className="fa fa-linkedin"></i></a>
                <a href="#" className="tm-social-icon"><i className="fa fa-youtube"></i></a>
                <a href="#" className="tm-social-icon"><i className="fa fa-behance"></i></a>
              </div>
            </div>
          </div>          
        </div>  
      </div>      
      <div>
        <div className="container">
          <div className="row tm-copyright">
           <p className="col-lg-12 small copyright-text text-center">Copyright &copy; 2022 Your Touch Menu</p>
         </div>  
       </div>
     </div>
   </footer>
    </>
}