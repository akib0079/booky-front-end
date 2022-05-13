import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BooInfo.css';
import iconBook from '../../images/featur1.png'
import { Spinner } from 'react-bootstrap';

const BookInfo = () => {
    const { id } = useParams();
    const url = `https://calm-caverns-00395.herokuapp.com/books/${id}`;
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(bookData => setBook(bookData))
    }, [url]);

    if (book >= 0) {
        return (
            <div className="spinnerDiv">
                <Spinner className='spinner' animation="grow" />
            </div>
        )
    }

    return (
        <section className='bookInfoPage'>
            <div class="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 text-center">
                        <img className='img-fluid bookImg' src={book.img} alt="" />
                    </div>
                    <div className="col-md-7 detailsInner">
                        <img className='img-fluid mb-3' src={iconBook} alt="" />
                        <h2>Name : {book.name}</h2>
                        <p className='w-75'>{book.desc}</p>
                        <hr></hr>
                        <div className="details d-flex justify-content-between">
                            <h5>Price : <span>${book.price}</span></h5>
                            <h5>Available : <span>{book.quantity}</span></h5>
                        </div>
                        <p>Author/Supplier : {book.supplier_name}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookInfo;