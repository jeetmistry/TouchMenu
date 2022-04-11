import React from "react";
import { ResHeader } from "./ResHeader";

export const Cart = () => {
    return <>
    <ResHeader/>
        <div className="tm-main-section light-gray-bg">
            <div className="container" id="main">
                <section className="tm-section tm-section-margin-bottom-0 row">
                    <div className="col-lg-12 tm-section-header-container">
                        <h2 className="tm-section-header gold-text tm-handwriting-font">
                            <img src="img/logo.png" alt="Logo" className="tm-site-logo" />
                            Your Cart</h2>
                        <div className="tm-hr-container">
                            <hr className="tm-hr" />

                        </div>
                    </div>
                    <div className="col-lg-12 tm-popular-items-container">
                        <div className="tm-popular-item">
                            <img src="img/popular-1.jpg" alt="Popular" className="tm-popular-item-img" />
                            <div className="tm-popular-item-description">
                                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Item Name</h3>
                                <hr className="tm-popular-item-hr" />
                                <p>Item Description : </p>
                                <p>Quantity : </p>
                                <p>Price : </p>
                                <p>Total Amount : </p>
                                <div className="order-now-container">
                                    <a href="#" className="order-now-link tm-handwriting-font" onClick={() => {
                                    }}>Remove Item</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
}