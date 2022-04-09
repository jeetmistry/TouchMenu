import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Footer } from './Footer';
import { HeaderUsers } from './HeaderUsers';
export const Register = () => {
    const [restaurant_name, setResName] = useState("");
    const [restaurant_email, setResEmail] = useState("");
    const [restaurant_password, setResPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [restaurant_address, setResAddress] = useState("");

    const API = axios.create({ baseURL: 'http://localhost:4000' });
    const registerRestaurant = async (e) => {
        e.preventDefault();
        console.log(restaurant_name, restaurant_email, restaurant_address, restaurant_password, confirm_password);
        const data = {
            "restaurant_name": restaurant_name,
            "restaurant_email": restaurant_email,
            "restaurant_password": restaurant_password,
            "restaurant_address": restaurant_address
        }
        if (restaurant_password === confirm_password) {
            const response = await API.post('/restaurant/register', data);
            alert(response.data.message + ", Please login to continue");
            window.location.replace("/login")
        } else {
            alert("Password should be same in both fields : Password, Confirm Password")
        }

    }

    useEffect(() => {
    }, [])

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
                    <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line" />&nbsp; Register Restaurant &nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line" /></h2>

                    <div class="tm-main-section light-gray-bg">
                        <div class="container" id="message">
                            <section class="tm-section row">
                                <form class="tm-contact-form">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" id="restaurant_name" class="form-control" placeholder="Restaurant Name" onChange={(e) => setResName(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}' id="restaurant_email" name="restaurant_email" class="form-control" placeholder="Restaurant Email" onChange={(e) => setResEmail(e.target.value)} required />
                                        </div>
                                        <div class="form-group">
                                            <textarea id="restaurant_address" name="restaurant_address" class="form-control" rows="6" placeholder="Restaurant Address" onChange={(e) => setResAddress(e.target.value)} required></textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="restaurant_password" name="restaurant_password" class="form-control" placeholder="Password" onChange={(e) => setResPassword(e.target.value)} required />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" id="confirm_password" name="confirm_password" class="form-control" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                                        </div>
                                        <div class="form-group">
                                            <button class="tm-more-button" name="Register" onClick={registerRestaurant}>Register</button>
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