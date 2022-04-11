import React from 'react';
import img from '../img/1.jpg';
import { Footer } from './Footer';
import { HeaderRestaurant } from './HeaderRestaurant';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const RestaurantHome = () => {


    const [profile, setProfile] = useState([]);
    const API = axios.create({ baseURL: 'http://localhost:4000' });
    const getprofile = async (e) => {
        const restaurant_id = localStorage.getItem("restaurant_id");
        const restaurant_name = localStorage.getItem("restaurant_name");
        const restaurant_email = localStorage.getItem("restaurant_email");
        const response = await API.post("/restaurant/getRestaurant", { id: restaurant_id })
        setProfile(response.data);
        console.log(profile)
    }

    useEffect(() => {
        getprofile();
    }, [])

    return <>
        <HeaderRestaurant />
        <section className="tm-welcome-section">
            <div className="container tm-position-relative">
                <div className="tm-lights-container">
                    <img src="img/light.png" alt="Light" className="light light-1" />
                    <img src="img/light.png" alt="Light" className="light light-2" />
                    <img src="img/light.png" alt="Light" className="light light-3" />
                </div>
                <div className="row tm-welcome-content">
                    <h2 className="white-text tm-handwriting-font tm-welcome-header">
                        <img src="img/header-line.png" alt="Line" className="tm-header-line" /><img src="img/header-line.png" alt="Line" className="tm-header-line" />
                    </h2>
                    <h2 className="gold-text tm-welcome-header-2">{profile.restaurant_name}</h2>
                    {/* <p className="gray-text tm-welcome-description">Touch Menu is a <span className="gold-text">QR Code</span> based menu ordering system.</p> */}
                    <a href="#main" className="tm-more-button tm-more-button-welcome">Details</a>
                </div>
                <img src="img/table-set.png" alt="Table Set" className="tm-table-set img-responsive" />
            </div>
        </section>
        <div className="tm-main-section light-gray-bg">
            <div className="container" id="main">
                <section className="tm-section row">
                    <div className="col-lg-9 col-md-9 col-sm-8">
                        <h2 className="tm-section-header gold-text tm-handwriting-font">The Best Food for you</h2>
                        <h2>Touch Menu</h2>
                        <p className="tm-welcome-description">Smart restaurant menu generation using QR code and recommendation using sentiment analysis.</p>
                        <h2 className="gold-text">Restaurant Name : {profile.restaurant_name}</h2>
                        <h2 className="gold-text">Restaurant Location : {profile.restaurant_address}</h2>
                        <h2 className="gold-text">Restaurant Email : {profile.restaurant_email}</h2>
                        <h2 className="gold-text">Restaurant Rating : {profile.restaurant_rating}</h2>
                        <h2 className="gold-text">Restaurant Orders : {profile.restaurant_total_orders}</h2>
                        <h2 className="gold-text">Number of Tables : {profile.restaurant_total_tables}</h2>
                        <h2 className="gold-text">Number of Tables Occupied: {profile.restaurant_tables_occupied}</h2>
                        <h2 className="gold-text">Restaurant Url: {profile.restaurant_url}</h2>
                        <a href="/profile" className="tm-more-button margin-top-30">Edit Profile</a>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
                        <div className="inline-block shadow-img">
                            <img src="img/1.jpg" alt="Image" className="img-circle img-thumbnail" />
                        </div>
                    </div>
                </section>
               
                <section className="tm-section row">
                    <div className="col-lg-12 tm-section-header-container">
                        <h2 className="tm-section-header gold-text tm-handwriting-font">
                            <img src="img/logo.png" alt="Logo" className="tm-site-logo" />
                            Top weekly sales</h2>
                        <div className="tm-hr-container">
                            <hr className="tm-hr" />

                        </div>
                    </div>
                    <div className="col-lg-12 tm-special-container margin-top-60">
                        <div className="tm-special-container-left">
                            <div className="tm-special-item">
                                <div className="tm-special-img-container">
                                    <img src="img/special-1.jpg" alt="Special" className="tm-special-img img-responsive" />
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
                                        <img src="img/special-2.jpg" alt="Special" className="img-responsive" />
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
                                        <img src="img/special-3.jpg" alt="Special" className="img-responsive" />
                                        <a href="#">
                                            <div className="tm-special-description">
                                                <p>Lemonade</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="tm-special-item">
                                    <div className="tm-special-img-container">
                                        <img src="img/special-4.jpg" alt="Special" className="img-responsive" />
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
                                <img src="img/logo.png" alt="Logo" className="tm-site-log" />
                                Daily Menu</h2>
                            <div className="tm-hr-container">
                                <hr className="tm-hr" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tm-daily-menu-container margin-top-60">
                            <div className="col-lg-4 col-md-4">
                                <img src="img/menu-board.png" alt="Menu board" className="tm-daily-menu-img" />
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
        <Footer />
    </>
}