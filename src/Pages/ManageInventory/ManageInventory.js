import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UsebookData from '../../Hooks/UsebookData';
import './ManageInventory.css';
const ManageInventory = () => {

    const [books, setBooks] = UsebookData([]);

    const nav = useNavigate();
    const navToDetails = (id) => {
        nav(`/book/${id}`)
    };


    const handleDelete = (id) => {
        const url = `https://calm-caverns-00395.herokuapp.com/books/${id}`;
        const deleted = window.confirm('Do you delete this product?');

        if (deleted) {
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaingBooks = books.filter(book => book._id !== id);
                    setBooks(remaingBooks);
                    toast.error(`Item Deleted`);

                })
        }

    };

    if (books >= 0) {
        return (
            <div className="spinnerDiv">
                <Spinner className='spinner' animation="grow" />
            </div>
        )
    }

    const navToAdd = () => {
        nav('/additem')
    }

    return (
        <div className='ManagePage'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="btnMange text-center">
                            <button onClick={() => navToAdd()} className='deliverBtn mt-5'>Add item</button>
                        </div>
                        <div className="ManageBooks">
                            <h2 className='text-center mt-5 mb-4'>All Collection fo Books</h2>
                            {
                                books.map(book =>
                                    <div className="perItem d-flex align-items-center justify-content-between" key={book._id}>
                                        <div className="infoMain d-flex align-items-center justify-content-between">
                                            <img className='mngImg' src={book.img} alt="" />
                                            <h4 className='mb-0 ms-4'>{book.name}</h4>
                                        </div>
                                        <h6 className='mb-0'>Stocks : {book.quantity}</h6>
                                        <div className="btns">
                                            {/* Delete btn */}
                                            <button onClick={() => handleDelete(book._id)} className='delBtn'>
                                                <div className="icon mt-2">
                                                    <box-icon name='trash' color='#ffffff' ></box-icon>
                                                </div>
                                            </button>

                                            <button onClick={() => navToDetails(book._id)} className='updateBtn ms-3'>
                                                <div className="icon mt-2">
                                                    <box-icon name='edit' type='solid' color='#ffffff' ></box-icon>
                                                </div>
                                            </button>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;