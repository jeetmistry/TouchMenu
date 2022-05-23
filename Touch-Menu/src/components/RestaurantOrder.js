import React, { useState, useEffect } from "react";
import { ResHeader } from "./ResHeader";
import axios from "axios";
import { HeaderRestaurant } from "./HeaderRestaurant";
const API = axios.create({ baseURL: 'http://localhost:4000' });
export const RestaurantOrder = () => {
    const [order, setOrder] = useState([]);
    // const table_no = localStorage.getItem("table_no");
    const restaurant_id = localStorage.getItem("restaurant_id");
    const getOrder = async () => {
        const response = await API.get(`/order/getorder/${restaurant_id}`);
        setOrder(response.data);
        console.log(order)
    }

    const handleOrderUpdate = async(props)=>{
        console.log(props);
        const response = await API.put(`/order/updateorder`,props);
        alert(response.data.message);
        getOrder();
    }
    useEffect(() => {
        getOrder();
    }, [])

    return <>
        <HeaderRestaurant />
        <div className="tm-main-section light-gray-bg">
            <div className="container" id="main">
                <section className="tm-section tm-section-margin-bottom-0 row">
                    <div className="col-lg-12 tm-section-header-container">
                        <h2 className="tm-section-header gold-text tm-handwriting-font">
                            <img src="img/logo.png" alt="Logo" className="tm-site-logo" />
                            Your Orders</h2>
                        <div className="tm-hr-container">
                            <hr className="tm-hr" />

                        </div>
                    </div>
                    {

                        order.length > 0 ? order.map((item) => {

                            return <>
                                <div className="card" style={{ padding: "50px", marginTop: "50px",borderRadius:"5rem"}}>
                                    <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Order Number : {item._id}  <hr /> Table No : {item.table_id}</h3>
                                    <hr className="tm-popular-item-hr" />
                                    <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Items</h3>
                                    <hr className="tm-popular-item-hr" />
                                    {
                                        item.items.map((i) => {
                                            return <>
                                                <img src={i.item_image} width="100dp" height="100dp" alt="Popular" className="tm-popular-item-img" />
                                                <i>Item Name : {i.name}</i>
                                                <i>Quantity : {i.quantity}</i>
                                                <i>Price : {i.item_price}</i>
                                            </>
                                        })
                                    }

                                    <hr className="tm-popular-item-hr" />
                                    <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Status : {item.status}</h3>
                                    <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Total Amount : ₹{item.total_amount}</h3>
                                <div class="form-group">
                                    <center>
                                        {/* Handle the orders from restaurant side */}
                                        <button class="tm-more-button" style={{ marginTop: "20px"}} onClick={async (e) => {
                                            e.preventDefault();
                                            let status = "Order Accepted";
                                            handleOrderUpdate({status:status,id:item._id});
                                        }}>Accept</button>

                                        <button class="tm-more-button" style={{ marginTop: "20px"}} onClick={async (e) => {
                                            e.preventDefault();
                                            let status = "Order Completed";
                                            handleOrderUpdate({status:status,id:item._id});
                                        }}>Order Completed</button>

                                        <button class="tm-more-button" style={{ marginTop: "20px"}} onClick={async (e) => {
                                            e.preventDefault();
                                            let status = "Order Rejected";
                                            handleOrderUpdate({status:status,id:item._id});
                                        }}>Reject</button>
                                    </center>
                                </div>
                                </div>

                            </>

                        }) : <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>No Orders Yet</h3>

                    }

                </section>

            </div>
        </div>
    </>
}