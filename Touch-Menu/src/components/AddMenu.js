import React from "react";
import { HeaderRestaurant } from "./HeaderRestaurant";
import { useState, useEffect } from "react";
import axios from "axios";
const API = axios.create({ baseURL: 'https://touchmenu.herokuapp.com' });
export const AddMenu = () => {
    const restaurant_name = localStorage.getItem("restaurant_name");
    const restaurant_id = localStorage.getItem("restaurant_id");
    const [item_name, setItemName] = useState("");
    const [item_description, setItemDescription] = useState("");
    const [item_type, setItemType] = useState("");
    const [item_image, setItemImage] = useState("");
    const [item_price, setItemPrice] = useState(0);

    const [menu, setMenu] = useState([]);

    const handleAddMenu = async () => {

        const API = axios.create({ baseURL: 'https://touchmenu.herokuapp.com' });
        const data = {
            item_type: item_type,
            item_name: item_name,
            item_description: item_description,
            item_price: item_price,
            item_image: item_image
        }
        const response = await API.post(`/menu/add/${restaurant_id}`, data);
        console.log(response.data);
        alert("Successfully Added");
    }

    const getMenu = async () => {
        const restaurant_id = localStorage.getItem("restaurant_id");
        const response = await API.get(`/menu/show/${restaurant_id}`);
        setMenu(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getMenu();
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
                    <h2 className="gold-text tm-welcome-header-2">{restaurant_name}</h2>

                    <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line" />&nbsp; Add Menu &nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line" /></h2>

                    <center style={{ marginTop: "50px" }}>
                        <div class="container" id="message">
                            <section class="tm-section row">
                                <form class="tm-contact-form">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" id="restaurant_name" class="form-control" placeholder="Item Name" required onChange={(e) => {
                                                e.preventDefault();
                                                setItemName(e.target.value);
                                            }} />
                                        </div>
                                        <div class="form-group">
                                            <textarea type="text" id="restaurant_address" class="form-control" placeholder="Item Description" required onChange={(e) => {
                                                e.preventDefault();
                                                setItemDescription(e.target.value);
                                            }} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="restaurant_address" class="form-control" placeholder="Item Type" required onChange={(e) => {
                                                e.preventDefault();
                                                setItemType(e.target.value);
                                            }} />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" id="restaurant_address" class="form-control" placeholder="Item Image" required onChange={(e) => {
                                                e.preventDefault();
                                                setItemImage(e.target.value);
                                            }} />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" id="restaurant_address" class="form-control" placeholder="Item Price" required onChange={(e) => {
                                                e.preventDefault();
                                                setItemPrice(e.target.value);
                                            }} />
                                        </div>

                                        <div class="form-group" style={{ marginTop: "100px" }}>
                                            <button class="tm-more-button" name="Login" onClick={(e) => {
                                                e.preventDefault();
                                                handleAddMenu()
                                            }}>Add To Menu</button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                        </div>
                    </center>

                </div>
                <img src="img/table-set.png" alt="Table Set" className="tm-table-set img-responsive" />
            </div>
        </section>

        <div className="tm-main-section light-gray-bg">
            <div className="container" id="main">
                <section className="tm-section tm-section-margin-bottom-0 row">
                    <div className="col-lg-12 tm-section-header-container">
                        <h2 className="tm-section-header gold-text tm-handwriting-font">
                            <img src="img/logo.png" alt="Logo" className="tm-site-logo" />
                            Your Menu</h2>
                        <div className="tm-hr-container">
                            <hr className="tm-hr" />

                        </div>
                    </div>
                    <div className="col-lg-12 tm-popular-items-container">
                        {
                            menu.map((item) => {
                                return <>
                                    <div className="tm-popular-item">
                                        <img src={item.item_image} width="286dp" height="250dp" alt="Popular" className="tm-popular-item-img" />
                                        <div className="tm-popular-item-description">
                                            <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>{item.item_name}</h3>
                                            <hr className="tm-popular-item-hr" />
                                            <p>{item.item_description} </p>
                                            <p>Price : <i><b>Rs. {item.item_price}</b></i></p>
                                            <p>Type : <i><b>{item.item_type}</b></i></p>
                                            <p>Rating : <i><b>{item.item_rating}</b></i></p>
                                            <div className="order-now-container">
                                                <a href="" className="order-now-link tm-handwriting-font" onClick={async() => {
                                                    const response = await API.delete(`/menu/delete/${item._id}`);
                                                    alert(response);
                                                }}>Delete Item</a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    </>
}