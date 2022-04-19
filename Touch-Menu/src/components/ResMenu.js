import React from 'react';
import img from '../img/1.jpg';
import { Footer } from './Footer';
import { HeaderUsers } from './HeaderUsers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ResHeader } from './ResHeader';
const API = axios.create({ baseURL: 'http://localhost:4000' });
export const ResMenu = () => {

    const [menu, setMenu] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [quantity,setQuantity] = useState(1);
    const getMenu = async () => {
        localStorage.clear();
        let res = window.location.href
        const restaurant_id = res.split("_")[1]
        const table_no = res.split("_")[2]
        localStorage.setItem("table_no", table_no);
        localStorage.setItem("restaurant_id", restaurant_id);
        const rest = await API.post("/restaurant/getRestaurant", { id: restaurant_id });

        setRestaurant(rest.data)
        //need to save table number also in localstorage
        const response = await API.get(`/menu/show/${restaurant_id}`);
        setMenu(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        getMenu();
    }, [])

    //function to get the food according to veg / nonveg category
    const handleCategory = async (props) => {
        console.log(props)
        const restaurant_id = localStorage.getItem("restaurant_id");
        const response = await API.get(`/menu/show/${restaurant_id}/${props}`);
        setMenu(response.data);
    }

    const addToCart = async(props)=>{
        console.log(props);
        const data = {
            restaurant_id:props.restaurant_id,
            item_id:props._id,
            item_image:props.item_image,
            table_id:localStorage.getItem("table_no"),
            quantity:quantity,
            total_amount:props.item_price,
            item_name:props.item_name,
            item_image : props.item_image
        }

        const response = await API.post('/cart/addCart',data);
        alert(response.data.message);
    }
    return <>
        <ResHeader />
        <section class="tm-welcome-section">
            <div class="container tm-position-relative">
                <div class="tm-lights-container">
                    <img src="img/light.png" alt="Light" class="light light-1" />
                    <img src="img/light.png" alt="Light" class="light light-2" />
                    <img src="img/light.png" alt="Light" class="light light-3" />
                </div>
                <div class="row tm-welcome-content">
                    <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line" />&nbsp;Our Menus&nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line" /></h2>
                    <h2 class="gold-text tm-welcome-header-2">{restaurant.restaurant_name}</h2>
                    <a href="#menu" class="tm-more-button tm-more-button-welcome">Read More</a>
                </div>
                <img src="img/table-set.png" alt="Table Set" class="tm-table-set img-responsive" />
            </div>
        </section>
        <div class="tm-main-section light-gray-bg">
            <div class="container" id="menu">
                <section class="tm-section row">
                    <div class="col-lg-9 col-md-9 col-sm-8">
                        <h2 class="tm-section-header gold-text tm-handwriting-font">Variety of Menus</h2>
                        <h2>{restaurant.restaurant_name}</h2>
                        <p class="tm-welcome-description">Life's too short for boring food. <span class="gold-text">Let's eat it.</span> We've got something for everyone.</p>
                        <a href="" class="tm-more-button margin-top-30">Read More</a>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
                        <div class="inline-block shadow-img">
                            <img src="img/1.jpg" alt="Image" class="img-circle img-thumbnail" />
                        </div>
                    </div>
                </section>
                <section class="tm-section row">
                    <div class="col-lg-12 tm-section-header-container margin-bottom-30">
                        <h2 class="tm-section-header gold-text tm-handwriting-font"><img src="img/logo.png" alt="Logo" class="tm-site-logo" /> Our Menus</h2>
                        <div class="tm-hr-container"><hr class="tm-hr" /></div>
                    </div>
                    <div>
                        <div class="col-lg-3 col-md-3">
                            <div class="tm-position-relative margin-bottom-30">
                                <nav class="tm-side-menu">
                                    <ul>
                                        <li><a href="#" class="active" onClick={(e) => {
                                            e.preventDefault();
                                            getMenu();
                                        }}>Choose Your Type</a></li>
                                        <li><a href="" onClick={(e) => {
                                            e.preventDefault();
                                            handleCategory("Veg")
                                        }}>Veg</a></li>
                                        <li><a href="" onClick={(e) => {
                                            e.preventDefault()
                                            handleCategory("Non-Veg")
                                        }}>Non-Veg</a></li>
                                    </ul>
                                </nav>
                                <img src="img/vertical-menu-bg.png" alt="Menu bg" class="tm-side-menu-bg" />
                            </div>
                        </div>
                        <div class="tm-menu-product-content col-lg-9 col-md-9" id="menu1">
                            {
                                menu.map((item) => {
                                    return <>
                                        <div class="tm-product" >
                                            <img src={item.item_image} width="150px" height="150px" class="img-circle img-thumbnail" alt="Product" />
                                            <div class="tm-product-text">
                                                <h3 class="tm-product-title">{item.item_name}</h3>
                                                <p>
                                                    <b>Item ID : </b>{item._id}
                                                </p>
                                                <p><b>Item Description : </b> {item.item_description}</p>
                                                <p><b>Item Type : </b>{item.item_type}</p>
                                                <p><b>Item Rating : </b>{item.item_rating}</p>
                                                <b>Select Quantity : </b><input type="number" placeholder='Quantity' onChange={(e)=>setQuantity(e.target.value)}/>
                                            </div>
                                            <div class="tm-product-price">
                                                <a href="" class="tm-product-price-link tm-handwriting-font" onClick={(e)=>{
                                                    e.preventDefault();
                                                    addToCart(item);
                                                }
                                                }><span class="tm-product-price-currency">&#8377;</span>{item.item_price}</a>
                                            </div>
                                        </div>
                                    </>
                                })
                            }

                            <div class="tm-product">
                                <img src="img/1.jpg" alt="Product" />
                                <div class="tm-product-text">
                                    <h3 class="tm-product-title">Pasta</h3>
                                    <p class="tm-product-description">How would you describe pasta?
                                        Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. </p>
                                </div>
                                <div class="tm-product-price">
                                    <a href="" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>200</a>
                                </div>
                            </div>
                            <div class="tm-product">
                                <img src="img/1.jpg" alt="Product" />
                                <div class="tm-product-text">
                                    <h3 class="tm-product-title">Lasagna</h3>
                                    <p class="tm-product-description">This classic lasagna is made with an easy meat sauce as the base. Layer the sauce with noodles and cheese, then bake until bubbly! This is great for feeding a big family, and freezes well, too.</p>
                                </div>
                                <div class="tm-product-price">
                                    <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>150</a>
                                </div>
                            </div>
                            <div class="tm-product">
                                <img src="img/1.jpg" alt="Product" />
                                <div class="tm-product-text">
                                    <h3 class="tm-product-title">Swordfish</h3>
                                    <p class="tm-product-description">This buttery Lemon Garlic Swordfish is stunningly delicious. This recipe results in a tender, flavor-packed fish that tastes like you spent way more time on it than you did.</p>
                                </div>
                                <div class="tm-product-price">
                                    <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency">&#8377;</span>250</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </>
}