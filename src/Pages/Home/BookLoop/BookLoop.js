import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookLoop = (props) => {
    const { _id, name, rating, price, quantity, supplier_name, img, desc } = props.info;

    const nav = useNavigate();

    const navToDetails = (id) => {
        nav(`/book/${id}`)
    }
    return (
        <div className='book'>
            <img className='img-fluid' src={img} alt="" />
            <div className="details p-3">
                <div className="moreInfo d-flex justify-content-between">
                    <h6>${price}</h6>
                    <h6>Available : {quantity}</h6>
                </div>
                <h4>{name}</h4>
                <p className='mb-0'>{desc.slice(0, 60)}...</p>
                <hr></hr>
                <div className="moreInfoBtn d-flex justify-content-between">
                    <p className='mb-0' onClick={() => navToDetails(_id)}>Update</p>
                    <h6>Supplier : {supplier_name.slice(0, 5)}</h6>
                </div>

            </div>
        </div>
    );
};

export default BookLoop;