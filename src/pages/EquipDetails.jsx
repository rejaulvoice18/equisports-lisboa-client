import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../components/Title';

const EquipDetails = () => {
    Title('Equipment Details')
    const equips = useLoaderData();
    const { _id, itemName, category, description, price, rating, customization, processTime, stock, equipmentPhoto } = equips;

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='font-bold pb-5'>Sports Equipments Details</h2>
            <div className="card lg:card-side bg-base-100">
                <figure className='w-1/2 border border-r-md'>
                    <img
                        src={equipmentPhoto}
                        alt="Album" />
                </figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{itemName}</h2>
                    <p><span className='font-bold'>Category:</span> {category}</p>
                        <p><span className='font-bold text-orange-500'>Price:</span> ৳{price}</p>
                        <h4><span className='font-bold pb-3 text-orange-500'>Stock:</span> {stock}</h4>
                        <p><span className='font-bold'>Description:</span> {description}</p>
                        <p><span className='font-bold'>Ratings:</span> {rating}</p>
                        <p><span className='font-bold'>Delvery Time:</span> {processTime}</p>
                        <p><span className='font-bold'>Customization:</span> {customization}</p>
                </div>
            </div>
        </div>
    );
};

export default EquipDetails;