import React from "react";

export const Footer = () => {
    return <>
        <footer>
            <div className="tm-black-bg">
                <div className="container">
                    <div className="row margin-bottom-60">
                        <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
                            <h3 className="tm-footer-div-title">Main Menu</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Directory</a></li>
                                <li><a href="#">Blog</a></li>
                                {/* <li><a href="#">Our Services</a></li> */}
                            </ul>
                        </nav>
                        <div className="col-lg-5 col-md-5 tm-footer-div">
                            <h3 className="tm-footer-div-title">About Us</h3>
                            <p className="margin-top-15">Smart restaurant menu generation using QR code and recommendation using sentiment analysis.</p>
                            {/* <p className="margin-top-15">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p> */}
                        </div>
                        <div className="col-lg-4 col-md-4 tm-footer-div">
                            <h3 className="tm-footer-div-title">Get Social</h3>
                            <p>Connect us on our social media pages.</p>
                            <div className="tm-social-icons-container">
                                <a href="#" className="tm-social-icon"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-linkedin"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-youtube"></i></a>
                                <a href="#" className="tm-social-icon"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row tm-copyright">
                        <p className="col-lg-12 small copyright-text text-center">Copyright &copy; 2022 Your Touch Menu</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}