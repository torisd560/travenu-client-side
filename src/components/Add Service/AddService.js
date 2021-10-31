import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/TourService', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        reset()
    }
    return (
        <div className='border border-1 border-secondary w-50  mx-auto my-5 p-5'>
            <h2 className='text-center mb-5'>Add a new service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='service-field'>
                <input type="text" {...register("title")} placeholder='Country Name' />
                <input type="text" {...register("description")} placeholder='Description' />
                <input type="number" {...register("price")} placeholder='Price' />
                <input type="url" {...register("img")} placeholder='Image-URL' />
                <input type="submit" className='custom-btn rounded-0 text-white text-uppercase' />
            </form>
        </div>
    );
};

export default AddService;