import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import UsebookData from '../../Hooks/UsebookData';
import './MyItems.css';

const MyItems = () => {
    const nav = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://calm-caverns-00395.herokuapp.com/myitem?s_name=${user?.email}`)
            .then(res => res.json())
            .then(bookData => setItems(bookData))
    }, [user]);


    const navToDetails = (id) => {
        nav(`/book/${id}`)
    };

    if (items === 0) {
        return (
            <div className="myItemsPage text-center">
                <h4>No Items added by {user?.displayName}</h4>
            </div>
        )
    }

    return (
        <div className='myItemsPage'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ManageBooks">
                            <h2 className='text-center mb-5'>My Books</h2>
                            {
                                items.map(book =>
                                    <div className="perItem d-flex align-items-center justify-content-between" key={book._id}>
                                        <img className='mngImg' src={book.img} alt="" />
                                        <h4 className='mb-0'>{book.name}</h4>
                                        <p className='mb-0'>Available : {book.quantity}</p>
                                        <div className="btns">
                                            <button onClick={() => navToDetails(book._id)} className='addBtn ms-3'>Manage</button>
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

export default MyItems;