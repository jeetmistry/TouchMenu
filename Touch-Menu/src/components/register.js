import React from 'react';

export const Register = () => {
    return <>
        <div class="tm-top-header">
            <div class="container">
                <div class="row">
                    <div class="tm-top-header-inner">
                        <div class="tm-logo-container">
                            <img src="img/logo.png" alt="Logo" class="tm-site-logo" />
                            <h1 class="tm-site-name tm-handwriting-font">Touch Menu</h1>
                        </div>
                        <div class="mobile-menu-icon">
                            <i class="fa fa-bars"></i>
                        </div>
                        <nav class="tm-nav">
                            <ul>
                                <li><a href="Home.js" className="active">Home</a></li>
                                <li><a href="menu.js">Menu</a></li>
                                <li><a href="contact.js">Contact</a></li>
                                <li><a href="login.js">Login</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <section className="tm-welcome-section">
            <div className="container tm-position-relative">
                <div className="tm-lights-container">
                    <img src="img/light.png" alt="Light" className="light light-1" />
                    <img src="img/light.png" alt="Light" className="light light-2" />
                    <img src="img/light.png" alt="Light" className="light light-3" />
                </div>
                <div className="row tm-welcome-content">
                <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line" />&nbsp; Register &nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line" /></h2>

                <div class="tm-main-section light-gray-bg">
                    <div class="container" id="message">
                        <section class="tm-section row">
                            <form action="#" method="post" class="tm-contact-form">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="text" id="restaurant_name" class="form-control" placeholder="Restaurant Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="restaurant_total_tables" class="form-control" placeholder="Restaurant Total Tables" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="restaurant_email" class="form-control" placeholder="Restaurant Email" />
                                    </div>
                                    <div class="form-group">
                                        <textarea id="restaurant_address" class="form-control" rows="6" placeholder="Restaurant Address"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" id="restaurant_password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                         <button class="tm-more-button" type="submit" name="Register">Register</button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>    
                </div>
                
                </div>
                </section>
            </>
}