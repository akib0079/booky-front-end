import React from 'react';
import './Footer.css';
import 'boxicons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="copyrighted d-flex align-items-center">
                            <box-icon name='copyright' color='#ffffff' ></box-icon>
                            <p className='ms-2'>Copyrighted by My Booky 2022</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="socialIcn d-flex align-items-center">
                            <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='instagram' type='logo' color='#ffffff' ></box-icon>
                            <box-icon name='flickr' type='logo' color='#ffffff' ></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;