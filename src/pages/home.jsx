import React from 'react'
import '../assets/css/font-awesome.css'
import logo from '../assets/images/logo.png'
import leftbanner from '../assets/images/left-banner-image.jpg'
import rightbanner from '../assets/images/baner-right-image-01.jpg'
import rightbanner2 from '../assets/images/baner-right-image-02.jpg'
import rightbanner3 from '../assets/images/baner-right-image-03.jpg'
import rightbanner4 from '../assets/images/baner-right-image-04.jpg'
import men2 from '../assets/images/men-02.jpg'
import men from '../assets/images/men-01.jpg'
import men3 from '../assets/images/men-03.jpg'
import kid1 from '../assets/images/kid-01.jpg'
import kid2 from '../assets/images/kid-02.jpg'
import kid3 from '../assets/images/kid-03.jpg'
import explore1 from "../assets/images/explore-image-01.jpg"
import explore2 from '../assets/images/explore-image-02.jpg'
import instagram from '../assets/images/instagram-01.jpg'
import instagram2 from '../assets/images/instagram-02.jpg'
import instagram3 from '../assets/images/instagram-03.jpg'
import whitelogo from '../assets/images/white-logo.png'
import instagram6 from '../assets/images/instagram-06.jpg'
import instagram4 from '../assets/images/instagram-04.jpg'
import instagram5 from '../assets/images/instagram-05.jpg'
import '../assets/css/templatemo-hexashop.css'
class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {/* <div id="preloader">
                    <div className="jumper">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> */}
                <header className="header-area header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <a href="index.html" className="logo">
                                        <img src= {logo} alt=""/>
                                    </a>
                                    <ul className="nav">
                                        <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                        <li className="scroll-to-section"><a href="#men">Men's</a></li>
                                        <li className="scroll-to-section"><a href="#women">Women's</a></li>
                                        <li className="scroll-to-section"><a href="#kids">Kid's</a></li>
                                        <li className="submenu">
                                            <a href="/">Pages</a>
                                            <ul>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="products.html">Products</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="/">Features</a>
                                            <ul>
                                                <li><a href="/">Features Page 1</a></li>
                                                <li><a href="/">Features Page 2</a></li>
                                                <li><a href="/">Features Page 3</a></li>
                                                <li><a rel="nofollow" href="https://templatemo.com/page/4" >Template Page 4</a></li>
                                            </ul>
                                        </li>
                                        <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                                    </ul>
                                    <a className='menu-trigger' href='/'>
                                        <span>Menu</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-banner" id="top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-content">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>We Are Hexashop</h4>
                                            <span>Awesome, clean &amp; creative HTML5 Template</span>
                                            <div className="main-border-button">
                                                <a href="/">Purchase Now!</a>
                                            </div>
                                        </div>
                                        <img src= {leftbanner} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-content">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Women</h4>
                                                        <span>Best Clothes For Women</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Women</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="/">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src={rightbanner} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Men</h4>
                                                        <span>Best Clothes For Men</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Men</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="/">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src={rightbanner2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Kids</h4>
                                                        <span>Best Clothes For Kids</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Kids</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="/">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src={rightbanner3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="right-first-image">
                                                <div className="thumb">
                                                    <div className="inner-content">
                                                        <h4>Accessories</h4>
                                                        <span>Best Trend Accessories</span>
                                                    </div>
                                                    <div className="hover-content">
                                                        <div className="inner">
                                                            <h4>Accessories</h4>
                                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                            <div className="main-border-button">
                                                                <a href="/">Discover More</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src={rightbanner4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section" id="men">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h2>Men's Latest</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="men-item-carousel">
                                    <div className="owl-men-item owl-carousel">
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={men} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>classNameic Spring</h4>
                                                <span>$120.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={men2} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>Air Force 1 X</h4>
                                                <span>$90.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={men3} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>Love Nana ‘20</h4>
                                                <span>$150.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={men} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>classNameic Spring</h4>
                                                <span>$120.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="kids">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-heading">
                                    <h2>Kid's Latest</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="kid-item-carousel">
                                    <div className="owl-kid-item owl-carousel">
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={kid1} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>School Collection</h4>
                                                <span>$80.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={kid2} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>Summer Cap</h4>
                                                <span>$12.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={kid3} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>classNameic Kid</h4>
                                                <span>$30.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <img src={kid1} alt=""/>
                                            </div>
                                            <div className="down-content">
                                                <h4>classNameic Spring</h4>
                                                <span>$120.00</span>
                                                <ul className="stars">
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="explore">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-content">
                                    <h2>Explore Our Products</h2>
                                    <span>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</span>
                                    <div className="quote">
                                        <i className="fa fa-quote-left"></i><p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                                    </div>
                                    <p>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                                    <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow" href="https://paypal.me/templatemo">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                                    <div className="main-border-button">
                                        <a href="products.html">Discover More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-content">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="leather">
                                                <h4>Leather Bags</h4>
                                                <span>Latest Collection</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="first-image">
                                                <img src={explore1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="second-image">
                                                <img src={explore2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="types">
                                                <h4>Different Types</h4>
                                                <span>Over 304 Products</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" id="social">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2>Social Media</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row images">
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Fashion</h6>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                    <img src={instagram} alt=""/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>New</h6>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                    <img src={instagram2} alt=""/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Brand</h6>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                    <img src={instagram3} alt=""/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Makeup</h6>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                    <img src={instagram4} alt=""/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Leather</h6>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                    <img src={instagram5} alt=""/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="thumb">
                                    <div className="icon">
                                        <a href="http://instagram.com">
                                            <h6>Bag</h6>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                    <img src={instagram6} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-heading">
                                    <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                                <form id="subscribe" action="" method="get">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-5">
                                            <fieldset>
                                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-2">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <ul>
                                            <li>Store Location:<br/><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                            <li>Phone:<br/><span>010-020-0340</span></li>
                                            <li>Office Location:<br/><span>North Miami Beach</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li>Work Hours:<br/><span>07:30 AM - 9:30 PM Daily</span></li>
                                            <li>Email:<br/><span>info@company.com</span></li>
                                            <li>Social Media:<br/><span><a href="/">Facebook</a>, <a href="/">Instagram</a>, <a href="/">Behance</a>, <a href="/">Linkedin</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="first-item">
                                    <div className="logo">
                                        <img src={whitelogo} alt="hexashop ecommerce templatemo"/>
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

                                            <br/>Distributed By: <a href="https://themewagon.com" title="free & premium responsive templates">ThemeWagon</a></p>
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
export default Home;
