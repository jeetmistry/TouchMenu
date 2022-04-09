import React from 'react';
import img from '../img/1.jpg';
import { Footer } from './Footer';
import { HeaderUsers } from './HeaderUsers';
export const Contact = () => {
    return <>
        <HeaderUsers />
        <section class="tm-welcome-section">
            <div class="container tm-position-relative">
                <div class="tm-lights-container">
                    <img src="img/light.png" alt="Light" class="light light-1" />
                    <img src="img/light.png" alt="Light" class="light light-2" />
                    <img src="img/light.png" alt="Light" class="light light-3" />
                </div>
                <div class="row tm-welcome-content">
                    <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line" />&nbsp;Contact Us&nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line" /></h2>
                    <h2 class="gold-text tm-welcome-header-2">Touch Menu</h2>
                    {/* <p class="gray-text tm-welcome-description">Touch Menu is free <span class="gold-text">responsive Bootstrap</span> v3.3.5 layout by <span class="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p> */}
                    <a href="#message" class="tm-more-button tm-more-button-welcome">Message Us</a>
                </div>
                <img src="img/table-set.png" alt="Table Set" class="tm-table-set img-responsive" />
            </div>
        </section>
        <div class="tm-main-section light-gray-bg">
            <div class="container" id="message">
                <section class="tm-section row">
                    <h2 class="col-lg-12 margin-bottom-30">Send us a message</h2>
                    <form action="#" method="post" class="tm-contact-form">
                        <div class="col-lg-6 col-md-6">
                            <div class="form-group">
                                <input type="text" id="contact_name" class="form-control" placeholder="NAME" />
                            </div>
                            <div class="form-group">
                                <input type="email" id="contact_email" class="form-control" placeholder="EMAIL" />
                            </div>
                            <div class="form-group">
                                <input type="text" id="contact_subject" class="form-control" placeholder="SUBJECT" />
                            </div>
                            <div class="form-group">
                                <textarea id="contact_message" class="form-control" rows="6" placeholder="MESSAGE"></textarea>
                            </div>
                            <div class="form-group">
                                <button class="tm-more-button" type="submit" name="submit">Send message</button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div id="google-map"></div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
        <Footer />
    </>
}