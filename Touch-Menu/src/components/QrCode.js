import React, { useEffect, useState } from "react";
import { HeaderRestaurant } from "./HeaderRestaurant";
import qrcode from 'qrcode';
import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:4000' });

export const QrCode = () => {

    const [restaurant, setRestaurant] = useState([]);
    const [url, setURL] = useState([]);
    const getQr = async (e) => {
        const restaurant_id = localStorage.getItem("restaurant_id");
        const rest = await API.post("/restaurant/getRestaurant", { id: restaurant_id });
        setRestaurant(rest.data)
        console.log(restaurant)
        const data = [];
        const stream = restaurant.restaurant_url;
        for (let i = 1; i <= restaurant.restaurant_total_tables; i++) {
            data[i - 1] = stream + "_" + i;
        }
        setURL(data)
        console.log(url)
    }

    useEffect(() => {
        getQr();
    }, [url])

    return <>
        <HeaderRestaurant />
        <div className="tm-main-section light-gray-bg">
            <div className="container" id="main">
                <section className="tm-section tm-section-margin-bottom-0 row">
                    <div className="col-lg-12 tm-section-header-container">
                        <h2 className="tm-section-header gold-text tm-handwriting-font">
                            <img src="img/logo.png" alt="Logo" className="tm-site-logo" />
                            All the Tables</h2>
                        <div className="tm-hr-container">
                            <hr className="tm-hr" />

                        </div>
                    </div>
                    <div className="col-lg-12 tm-popular-items-container">
                        {url.map((table) => {
                            let table_no = table.split("_")[2];
                            let code;
                            qrcode.toDataURL(table, (error, qr) => {
                                code = qr;
                            })
                            return <>
                                <div className="tm-popular-item">
                                    <center>

                                    <img src={code} alt="Popular" className="tm-popular-item-img" />
                                    </center>
                                    <div className="tm-popular-item-description">
                                        <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter"></span>Table : {table_no}</h3>
                                        <hr className="tm-popular-item-hr" />

                                        <p>Restaurant Name : {restaurant.restaurant_name} </p>
                                        <p> Restaurant Rating : {restaurant.restaurant_rating}</p>
                                        <p>Restaurant Address : {restaurant.restaurant_address}</p>

                                        <div className="order-now-container">
                                            <a href={table} className="order-now-link tm-handwriting-font" onClick={() => {
                                            }}>Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}

                    </div>
                </section>
            </div>
        </div>
    </>
}