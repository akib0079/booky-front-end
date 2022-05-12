import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const ServiceLoop = (props) => {
    const { s_name, price, rating, img, s_info } = props.info;
    const allInfo = props.info;
    const navigate = useNavigate();

    const handleCheckout = (allInfo) => {
        navigate(`/checkout/${allInfo.s_name}`);
    }
    return (
        <div className='service-Inner'>
            <img className='img-fluid image_s' src={img} alt="" />
            <div className="serviceInfo">
                <div className="priceNrating">
                    <div className="rating d-flex">
                        <div className="icn me-2">
                            <box-icon name='star' type='solid' color="#E8604C" ></box-icon>
                            <box-icon name='star' type='solid' color="#E8604C" ></box-icon>
                            <box-icon name='star' type='solid' color="#E8604C" ></box-icon>
                            <box-icon name='star' type='solid' color="#E8604C" ></box-icon>
                            <box-icon name='star' color="#E8604C"></box-icon>
                        </div>
                        <p>Rating : {rating}</p>
                    </div>
                    <div className="price">
                        <p>Price : {price}</p>
                    </div>
                </div>
                <h3>{s_name}</h3>
                <div className="location d-flex">
                    <div className="icn me-1">
                        <box-icon name='edit-location' type='solid' color="#E8604C" ></box-icon>
                    </div>
                    <h5>Bangladesh</h5>
                </div>
                <p className='s_info'>{
                    s_info.slice(0, 120) + '...'
                }</p>
                <button onClick={() => handleCheckout(allInfo)} className='infoBtn_Service'><box-icon name='right-arrow-alt' color='#fdfafa' ></box-icon></button>
            </div>
        </div>
    );
};

export default ServiceLoop;