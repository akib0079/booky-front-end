import React from 'react';
import aboutImg from '../../images/home-2-revolution-img-2.png';


const About = () => {
    return (
        <section className="aboutSec page">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <img className='img-fluid aboutImg' src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-7 aboutInner">
                        <h5>What we do...</h5>
                        <h2>We collect tons of books. <br></br>Explore the online library now.</h2>
                        <p>You can manage deliver or supply books from my booky.<br></br> LogIn or signup while visiting, Hopefully you will be having fun exploring!</p>
                        <a href="/manageinventory">
                            <button className='HeroBtn2'>Explore all our books</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;