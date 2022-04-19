import React, { useState, useEffect } from "react";
import { ResHeader } from "./ResHeader";
import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000' });
export const Cart = () => {
    const [cart, setCart] = useState([]);
    const [final_amount, setAmount] = useState();
    const [order, setOrder] = useState([]);
    const table_no = localStorage.getItem("table_no");
    const restaurant_id = localStorage.getItem("restaurant_id");
    const getCart = async () => {
        const response = await API.get(`/cart/showCart/${restaurant_id}/${table_no}`);
        setCart(response.data);
        console.log(cart)
        let amount = 0;
        let total_amount = 0
        let data = {
            restaurant_id:"",
            total_amount:"",
            items: []
        };
        data.restaurant_id = restaurant_id;
        data.table_id = table_no;
        cart.map((item) => {
            amount += item.total_amount;
            data["items"].push({ item_id: item.item_id, name: item.item_name, quantity: item.quantity ,item_image:item.image,item_price:item.total_amount});
        })
        setAmount(amount);
        data.total_amount = final_amount;
        setOrder(data);
        console.log(order);
    }

    useEffect(() => {
        getCart();
    }, [cart])

    return <>
        <ResHeader />
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
                        {

                            cart.length > 0 ? cart.map((item) => {

                                return <>
                                    <div className="tm-popular-item">
                                        <img src={item.image} width="286dp" height="250dp" alt="Popular" className="tm-popular-item-img" />
                                        <div className="tm-popular-item-description">
                                            <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>{item.item_name}</h3>
                                            <hr className="tm-popular-item-hr" />
                                            <p>{item.item_description} </p>
                                            <p>Quantity : <i><b>{item.quantity}</b></i></p>
                                            <p>Total Amount : <i><b>₹ {item.total_amount}</b></i></p>
                                            <div className="order-now-container">
                                                <a href="" className="order-now-link tm-handwriting-font" onClick={async (e) => {
                                                    e.preventDefault();
                                                    const response = await API.get(`/cart/removeCart/${item._id}`);
                                                    alert(response.data.message);
                                                }}>Delete Item</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }) : <></>
                        }


                    </div>
                </section>
                {
                    cart.length > 0 ? <>
                        <h2>Total Items : {cart.length}</h2>
                        <h2>Final Amount : ₹ {final_amount}/-</h2>
                        <div class="form-group">
                            <button class="tm-more-button" onClick={async(e) => {
                                e.preventDefault();
                                const response = await API.post(`/order/placeorder`,order);
                                console.log(response);
                            }}>Place Order</button>
                        </div>
                        <div class="form-group">
                            <button class="tm-more-button" onClick={async(e) => {
                                e.preventDefault();
                                const response = await API.get(`/cart/deletecart/${restaurant_id}/${table_no}`);
                                console.log(response);
                            }}>Empty Cart</button>
                        </div>
                    </> : <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>No Items In The Cart</h3>
                }


            </div>
        </div>
    </>
}