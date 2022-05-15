import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BooInfo.css';
import iconBook from '../../images/featur1.png'
import { Button, Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const BookInfo = () => {
    const { id } = useParams();
    const url = `https://calm-caverns-00395.herokuapp.com/books/${id}`;
    const [book, setBook] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(bookData => setBook(bookData))
    }, [url]);

    // displaying quantity
    const [q, setQ] = useState(0);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(bookData => setQ(bookData.quantity))
    }, [url]);

    if (book >= 0) {
        return (
            <div className="spinnerDiv">
                <Spinner className='spinner' animation="grow" />
            </div>
        )
    }

    const decreaseCount = (id) => {
        const decrease = window.confirm('Do you want to mark the product as delivered?');
        if (decrease) {
            if (book.quantity === 0) {
                toast.error(`No items available for ${book.name}`, {
                    position: toast.POSITION.TOP_CENTER
                });
                return;
            }
            const url = `https://calm-caverns-00395.herokuapp.com/books/${id}`;
            const data = book;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(dataBD => {
                    toast.success(`Delivered 1 item for ${book.name}`);
                    setQ(q - 1);
                })
        };

    }

    const handleAddStock = (e) => {
        e.preventDefault();
        const stock = e.target.stockInput.value;

        const url = `https://calm-caverns-00395.herokuapp.com/books/${id}`;
        const qNum = book.quantity;
        const data = { qNum, stock };

        fetch(url, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data, stock)
        })
            .then(res => res.json())
            .then(dataB => {
                toast.success(`Quantity added for ${book.name}`);
                setQ(q + parseInt(stock));
            })
    }

    return (
        <section className='bookInfoPage'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 text-center">
                        <img className='img-fluid bookImg' src={book.img} alt="" />
                    </div>
                    <div className="col-md-7 detailsInner">
                        <img className='img-fluid mb-3' src={iconBook} alt="" />
                        <h2>Name : {book.name}</h2>
                        <small>Product id : {book._id}</small>
                        <p className='w-75 pt-3'>{book.desc}</p>
                        <hr></hr>
                        <div className="details d-flex justify-content-between">
                            <h5>Available : <span>{q}</span></h5>
                            <h5>Price : <span>${book.price}</span></h5>
                        </div>
                        <p>Author/Supplier : {book.supplier_name}</p>
                        <div className="update d-flex justify-content-between">
                            <button onClick={() => decreaseCount(id)} className='deliverBtn'>Deliver this item</button>
                            <form onSubmit={handleAddStock} className="restock d-flex">
                                <input id='stockInput' name='stockInput' className="form-control" placeholder='Restock this item' type="number" />
                                <button className='addBtn'>Add</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookInfo;