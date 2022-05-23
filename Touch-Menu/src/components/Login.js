import React from 'react';
import { Footer } from './Footer';
import { HeaderUsers } from './HeaderUsers';
import { useState } from 'react';
import axios from 'axios';
export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    const API = axios.create({ baseURL: 'http://localhost:4000' });

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password)
        const data = {
            "restaurant_email": email,
            "restaurant_password": password
        }
        const response = await API.post("/restaurant/login", data);
        console.log(response.data);
        localStorage.clear();
        localStorage.setItem("restaurant_id", response.data._id);
        localStorage.setItem("restaurant_name", response.data.restaurant_name);
        localStorage.setItem("restaurant_email", response.data.restaurant_email);
        alert("Login Successful");
        window.location.replace("/restaurantHome");
    }
    return <>
        <HeaderUsers />
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
                                <form class="tm-contact-form">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="email" id="contact_email" class="form-control" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="password" class="form-control" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <button class="tm-more-button" name="Login" onClick={handleLogin}>Login</button>
                                        </div>
                                        <div class="form-group">
                                            <a href="/register" class="tm-more-button">Register</a>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <Footer />
    </>
}
