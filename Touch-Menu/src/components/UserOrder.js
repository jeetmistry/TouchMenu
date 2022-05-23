import React, { useState, useEffect } from "react";
import { ResHeader } from "./ResHeader";
import axios from "axios";
import {StarRatingInput,StarRating} from 'react-star-rating-input';
import Rating from 'react-rating';
import "./handlereview.css";
const API = axios.create({ baseURL: 'http://localhost:4000' });
export const UserOrder = () => {
    const [order, setOrder] = useState([]);
    var rating = {};
    const [review,setReview] = useState("");
    const table_no = localStorage.getItem("table_no");
    const restaurant_id = localStorage.getItem("restaurant_id");
    const getOrder = async () => {
        const response = await API.get(`/order/getcustomerorder/${restaurant_id}/${table_no}`);
        setOrder(response.data);
        console.log(order)
    }

    //handle the review from user
    const handleReview = async(props)=>{
        console.log(props)
        let data = {
            restaurant_id:restaurant_id,
            ratings : props,
            review:review
        }
        const response = await API.post('/sentiment/submitReview',data);
        alert(response.data.message);
        setModal(!modal);

    }
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    useEffect(() => {
        getOrder();
    }, [])

    return <>
        <ResHeader />
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
                                <div className="card" style={{ padding: "50px", marginTop: "50px" }}>
                                    <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Order Number : {item._id} </h3>
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
                                </div>
                                {
                                    item.status == "Order Completed" ?
                                        <>
                                            <h2 className="gold-text tm-handwriting-font">
                                                <img src="img/logo.png" alt="Logo" className="tm-site-logo" style={{ marginRight: "20px" }} />
                                                Please Checkout and Submit a review for your order</h2>
                                            <div class="form-group">
                                                <center>
                                            
                                                    <button class="tm-more-button" style={{ marginTop: "50px", marginBottom: "50px" }} onClick={async (e) => {
                                                        e.preventDefault();
                                                        toggleModal();
                                                    }}>Checkout</button>
                                                    {modal && (
                                                        <div>
                                                            <div onClick={toggleModal} className="overlay"></div>
                                                            <div className="modal-content">
                                                            <h2 className="gold-text tm-handwriting-font">
                                                <img src="img/logo.png" alt="Logo" className="tm-site-logo" style={{ marginRight: "20px" }} />
                                                Please Checkout and Submit a review for your order</h2>
                                                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Rate Items</h3>
                                                                {
                                                                    item.items.map((i) => {
                                                                        return <>
                                                                            <i>Item Name : {i.name}</i>
                                                                            <i>Quantity : {i.quantity}</i>
                                                                            <i>Price : {i.item_price}</i>
                                                                            <Rating onChange={(e)=>
                                                                            {
                                                                                rating[i.item_id]=e;
                                                                                console.log(rating);
                                                                            }
                                                                            }/>
                                                                            <hr />
                                                                        </>
                                                                    })
                                                                }
                                                                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Feedback Review</h3>
                                                                 <div class="form-group">
                                            <input type="text" id="restaurant_address" class="form-control" style={{width:"70%"}} placeholder="Please Enter Your Valueable Feedback for the order" required onChange={(e)=>{
                                                e.preventDefault();
                                                setReview(e.target.value);
                                            }}/>
                                            
                                            <button class="tm-more-button" style={{ marginTop: "50px", marginBottom: "50px" }} onClick={async (e) => {
                                                        e.preventDefault();
                                                        handleReview(rating);
                                                    }}>Checkout</button>
                                        </div>
                                                                <button className="close-modal tm-more-button" onClick={toggleModal}>
                                                                    CLOSE
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </center>
                                            </div>
                                        </> : <></>
                                }

                            </>

                        }) : <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>No Orders Yet</h3>

                    }

                </section>

            </div>
        </div>
    </>
}