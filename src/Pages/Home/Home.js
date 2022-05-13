import React, { useEffect, useState } from 'react';
import './Home.css';
import bannerImg from '../../images/bannerIMgawd.png';
import aboutImg from '../../images/image-4.webp';
import icn1 from '../../images/featur1.png';
import icn2 from '../../images/featur2.png';
import icn3 from '../../images/featur3.png';
import icn4 from '../../images/featur4.png';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div className="homePage">
            {/* Horo sec */}
            <section className="heroSec">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="HeroSecInner">
                                <h1>Welcome to Manage <span>My Booky</span></h1>
                                <h3>Explore various book from our available stocks</h3>
                                <hr></hr>
                                <p>You can manage deliver or supply books from my booky. LogIn or signup while visiting, Hopefully you will be having fun exploring!</p>
                                <a href="#service">
                                    <button className='HeroBtn2'>Manage Books</button>
                                </a>
                                <a href="#service">
                                    <button className='HeroBtn ms-2'>Explore all our books</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className='img-fluid' src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured sec */}

            <section className='featuredSec'>
                <div className="container">
                    <div className="row gx-4">
                        <div className="col-md-3 featuredInner text-center">
                            <img src={icn1} alt="" />
                            <h4 className='mt-3'>⦿ <br></br>Explore or Add Stocks</h4>
                            <p>Except sint occaecat cupi datat non proident, sunt culpa qui<br></br> officia desemi.</p>
                        </div>
                        <div className="col-md-3 featuredInner text-center">
                            <img src={icn2} alt="" />
                            <h4 className='mt-3'>⦿ <br></br>Learn More</h4>
                            <p>Except sint occaecat cupi datat non proident, sunt culpa qui<br></br> officia desemi.</p>
                        </div>
                        <div className="col-md-3 featuredInner text-center">
                            <img src={icn3} alt="" />
                            <h4 className='mt-3'>⦿ <br></br>Maintaining Stocks</h4>
                            <p>Except sint occaecat cupi datat non proident, sunt culpa qui<br></br> officia desemi.</p>
                        </div>
                        <div className="col-md-3 featuredInner text-center">
                            <img src={icn4} alt="" />
                            <h4 className='mt-3'>⦿ <br></br>Deliver as Supplier</h4>
                            <p>Except sint occaecat cupi datat non proident, sunt culpa qui<br></br> officia desemi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* about Section */}
            <section className="aboutSec">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5">
                            <img className='img-fluid aboutImg' src={aboutImg} alt="" />
                        </div>
                        <div className="col-md-7 aboutInner">
                            <h5>What we do...</h5>
                            <h2>We collect tons of books. <br></br>Explore the online library now.</h2>
                            <p>You can manage deliver or supply books from my booky.<br></br> LogIn or signup while visiting, Hopefully you will be having fun exploring!</p>
                            <a href="#service">
                                <button className='HeroBtn2'>Explore all our books</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;