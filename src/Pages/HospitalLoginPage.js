import React, { Component } from 'react';
import '../assets/css/swiper.min.css';
import '../assets/style.css';
import '../assets/css/font-awesome.min.css';
import logo from '../assets/images/logo.png';
import emergency from '../assets/images/emergency-call.png';
import backgroundh from '../assets/images/hero.jpg';
import HospitalSearchForm from './HospitalSearchForm';

//import '../assets/js/swiper';
//import '../assets/js/jquery';
// import '../assets/js/jquery.barfiller';
// import '../assets/js/jquery.countdown';
// import '../assets/js/custom';
// import '../assets/js/jquery.collapsible.min';
// // import '../assets/js/circle-progress.min';
// import '../assets/js/jquery.countTo.min';
// import '../assets/js/jquery.barfiller';

class HospitalLoginPage extends Component {
    render() {
        return (
            <div>
                <header className="site-header">
                    <div className="nav-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                                    <div className="site-branding d-flex align-items-center">
                                        <a className="d-block" href="#" rel="home"><img className="d-block" src={logo} alt="logo" /></a>
                                    </div>
                                    <nav className="site-navigation d-flex justify-content-end align-items-center">
                                        <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                            <li className="current-menu-item"><a href="index.html">Home</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                                <a className="d-flex justify-content-center align-items-center" href="#"><img src={emergency}></img> +91 912 345 6789</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container hero-slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide hero-content-wrap" style={{backgroundImage: `url(${backgroundh})`}}>
                                <div className="hero-content-overlay position-absolute w-100 h-100">
                                    <div className="container h-100">
                                        <div className="row h-100">
                                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                                                <header className="entry-header">
                                                    <h1>The Best <br />Medical Services</h1>
                                                </header>

                                                <div className="entry-content mt-4">
                                                    <p>We provide the Best Medical Services, even when it is the most critical
                                            case.</p>
                                                </div>

                                                <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                                                    <a href="#" className="button gradient-bg">Read More</a>
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pagination-wrap position-absolute w-100">
                            <div className="swiper-pagination d-flex flex-row flex-md-column"></div>
                        </div>
                    </div>
                </header>
                <div className="homepage-boxes">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <HospitalSearchForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-boxes">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="opening-hours">
                                    <h2 className="d-flex align-items-center">Operating Hours</h2>

                                    <ul className="p-0 m-0">
                                        <li>Monday - Sunday <span>24/7 </span></li>

                                        <li>Available<span>365 days</span></li>


                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="emergency-box">
                                    <h2 className="d-flex align-items-center">Emergency</h2>

                                    <div className="call-btn button gradient-bg">
                                        <a className="d-flex justify-content-center align-items-center" href="#"><img src={emergency}></img>
                                            +91 912 345 6789</a>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="our-departments">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="our-departments-wrap">
                                    <h2>Our Departments</h2>

                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/cardiogram.png" alt=""></img>

                                                    <h3>Cardiology</h3>
                                                </header>


                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/stomach-2.png" alt=""></img>

                                                    <h3>Gastroenterology</h3>
                                                </header>

                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/blood-sample-2.png" alt=""></img>

                                                    <h3>Medical Lab</h3>
                                                </header>


                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/teeth.png" alt=""></img>

                                                    <h3>Dental Care</h3>
                                                </header>


                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/stretcher.png" alt=""></img>

                                                    <h3>Surgery</h3>
                                                </header>


                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/scanner.png" alt=""></img>

                                                    <h3>Neurology</h3>
                                                </header>


                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4 mb-md-0">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/bones.png" alt=""></img>

                                                    <h3>Orthopaedy</h3>
                                                </header>


                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4 mb-lg-0">
                                            <div className="our-departments-cont">
                                                <header className="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/blood-donation-2.png" alt=""></img>

                                                    <h3>Pediatry</h3>
                                                </header>


                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4 mb-0">
                                            <div className="our-departments-cont">
                                                <header classn  ="entry-header d-flex flex-wrap align-items-center">
                                                    <img src="images/glasses.png" alt=""></img>

                                                    <h3>Ophthalmology</h3>
                                                </header>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="site-footer">
                    <div className="footer-widgets">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="foot-about">
                                        <h2><a href="#"><img src={logo} alt=""></img></a></h2>

                                        <p>Hospital with care at each and every step of Treatment</p>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                                    <div className="foot-contact">
                                        <h2>Contact</h2>

                                        <ul className="p-0 m-0">
                                            <li><span>Addtress:</span>Banaglore, India</li>
                                            <li><span>Phone:</span>+91 912 345 6789</li>
                                            <li><span>Email:</span>ABCHospital@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                                    <div className="foot-links">
                                        <h2>Useful Links</h2>

                                        <ul className="p-0 m-0">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Departments</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        );
    }
}


export default HospitalLoginPage;