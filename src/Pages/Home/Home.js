import React, { useEffect, useState } from 'react';
import './Home.css';
import bannerImg from '../../images/bannerIMgawd.png';

const Home = () => {


    return (
        <div className="homePage">
            <div className="heroSec">
                <div className='container'>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="HeroSecInner">
                                <h1>Welcome to Manage <span>My Booky</span></h1>
                                <h3>Explore various book from our available stocks</h3>
                                <p>You can manage deliver or supply<br></br> books from my booky.</p>
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
            </div>
            {/* Services Section */}


        </div>
    );
};

export default Home;