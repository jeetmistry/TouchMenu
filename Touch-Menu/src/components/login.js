import React from 'react';

export const Login = () => {
    return <>
        <section className="tm-welcome-section">
            <div className="container tm-position-relative">
                <div className="tm-lights-container">
                    <img src="img/light.png" alt="Light" className="light light-1" />
                    <img src="img/light.png" alt="Light" className="light light-2" />
                    <img src="img/light.png" alt="Light" className="light light-3" />
                </div>
                <div className="row tm-welcome-content">
                <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line" />&nbsp; Login &nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line" /></h2>

                <div class="tm-main-section light-gray-bg">
                    <div class="container" id="message">
                        <section class="tm-section row">
                            <form action="#" method="post" class="tm-contact-form">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input type="email" id="contact_email" class="form-control" placeholder="EMAIL" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" id="password" class="form-control" placeholder="PASSWORD" />
                                    </div>
                                    <div class="form-group">
                                         <button class="tm-more-button" type="submit" name="Login">Login</button>
                                    </div>
                                    <div class="form-group">
                                    <a href="register.js" class="tm-more-button">Register</a> 
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