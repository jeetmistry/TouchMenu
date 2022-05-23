import React from "react";
import { HeaderRestaurant } from "./HeaderRestaurant";
import { useState } from "react";
import axios from "axios";

export const Profile = () => {
    const restaurant_name = localStorage.getItem("restaurant_name");
    const restaurant_id = localStorage.getItem("restaurant_id");
    const [name, setName] = useState("");
    const [tables,setTables] = useState(0);
    const [address,setAddress] = useState("");

    const handleUpdate = async()=>{

        const API = axios.create({ baseURL: 'https://touchmenu.herokuapp.com' });
        console.log(name,tables,address);
        const data = {
            id:restaurant_id,
            name:name,
            tables:tables,
            address:address,
            url:`http://localhost:3000/restaurant_${restaurant_id}` //need to change this
        }
        const response = await API.put("/restaurant/update",data);
        console.log(response.data);
        localStorage.setItem("restaurant_name",name);
        alert("Successfully Updated");
        window.location.replace("/restaurantHome");
    }
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

                    <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="img/header-line.png" alt="Line" class="tm-header-line" />&nbsp; Edit Profile &nbsp;&nbsp;<img src="img/header-line.png" alt="Line" class="tm-header-line" /></h2>

                    <center style={{marginTop:"50px"}}>
                        <div class="container" id="message">
                            <section class="tm-section row">
                                <form class="tm-contact-form">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input type="text" id="restaurant_name" class="form-control" placeholder="Restaurant Name" required onChange={(e)=>{
                                                e.preventDefault();
                                                setName(e.target.value);
                                            }}/>
                                        </div>
                                        <div class="form-group">
                                            <input type="number" id="restaurant_address" class="form-control" placeholder="Number of Tables" required onChange={(e)=>{
                                                e.preventDefault();
                                                setTables(e.target.value);
                                            }}/>
                                        </div>
                                        <div class="form-group">
                                            <textarea type="text" id="restaurant_address" class="form-control" placeholder="Restaurant Address" required onChange={(e)=>{
                                                e.preventDefault();
                                                setAddress(e.target.value);
                                            }}/>
                                        </div>

                                        <div class="form-group" style={{marginTop:"100px"}}>
                                            <button class="tm-more-button" name="Login" onClick = {(e)=>{
                                                e.preventDefault();
                                                handleUpdate()
                                            }}>Update Profile</button>
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
    </>
}