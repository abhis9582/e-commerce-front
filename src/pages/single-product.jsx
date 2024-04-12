import React from 'react';

class Singleproduct extends React.Component {
    render() {
        return (
            <div>
                <div id="preloader">
                    <div className="jumper">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="page-heading" id="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content">
                                    <h2>Single Product Page</h2>
                                    <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section" id="product">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="left-images">
                                    {/* <img src="assets/images/single-product-01.jpg" alt="">
                                    <img src="assets/images/single-product-02.jpg" alt=""> */}
                                </div>
                                <div className="col-lg-4">
                                    <div className="right-content">
                                        <h4>New Green Jacket</h4>
                                        <span className="price">$75.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                                        <div className="quote">
                                            <i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                                        </div>
                                        <div className="quantity-content">
                                            <div className="left-content">
                                                <h6>No. of Orders</h6>
                                            </div>
                                            <div className="right-content">
                                                <div className="quantity buttons_added">
                                                    <input type="button" className="minus" />
                                                    <input type="number" step="1" min="1" max="" name="quantity" title="Qty" className="input-text qty text" size="4" pattern=""  />
                                                    <input type="button" className="plus" />
                                                </div>
                                                <div className="total">
                                                    <h4>Total: $210.00</h4>
                                                    <div className="main-border-button"><a href="/">Add To Cart</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="first-item">
                                    <div className="logo">
                                        <img src="assets/images/white-logo.png" alt="hexashop ecommerce templatemo"/>
                                    </div>
                                    <ul>
                                        <li><a href="/">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                                        <li><a href="/">hexashop@company.com</a></li>
                                        <li><a href="/">010-020-0340</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <h4>Shopping &amp; Categories</h4>
                                <ul>
                                    <li><a href="/">Men’s Shopping</a></li>
                                    <li><a href="/">Women’s Shopping</a></li>
                                    <li><a href="/">Kid's Shopping</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="/">Homepage</a></li>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Help</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <h4>Help &amp; Information</h4>
                                <ul>
                                    <li><a href="/">Help</a></li>
                                    <li><a href="/">FAQ's</a></li>
                                    <li><a href="/">Shipping</a></li>
                                    <li><a href="/">Tracking ID</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-12">
                                <div className="under-footer">
                                    <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.

                                        <br/>Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a>

                                            <br/>Distributed By: 
                                            <a href="https://themewagon.com" rel="noreferrer" target="_blank" title="free & premium responsive templates">ThemeWagon</a></p>
                                            <ul>
                                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="/"><i className="fa fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                </footer>
            </div>

        )
    }
}
export default Singleproduct;