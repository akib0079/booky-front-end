import React from 'react';
import './Additem.css';
import icn3 from '../../images/featur3.png';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Additem = () => {
    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://calm-caverns-00395.herokuapp.com/books/`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} added`);
            })
    };


    const userName = user?.email;
    return (
        <div className='addItemPage'>
            <div className="container">
                <div className="pageHeader text-center mb-4">
                    <img className='img-fluid mb-3' src={icn3} alt="" />
                    <h2 className='fw-bold'>Add new item/books from here!</h2>
                </div>
                <form className='addItemForm' onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-2" required type="text" placeholder="Book Name" {...register("name", { required: true, maxLength: 80 })} />
                    <input className="form-control mb-2" value={userName} readOnly required type="text" placeholder="Supplier Email/Name" {...register("supplier_name", { required: true })} />
                    <input className="form-control mb-2" required type="number" placeholder="Price" {...register("price", { required: true, maxLength: 4 })} />
                    <textarea className="form-control mb-2" required placeholder="Book desc" {...register("desc", { required: true })} />
                    <input className="form-control" type="number" placeholder="Stock/Quantity" {...register("quantity", { required: true, min: -2 })} />
                    <input className="form-control mb-2" required type="number" placeholder="Rating" {...register("rating", { required: true, max: 5, min: 0, maxLength: 3 })} />
                    <input className="form-control mb-2" required type="url" placeholder="Image URL" {...register("img", { required: true })} />

                    <input className='deliverBtn' value={"Add Book"} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Additem;