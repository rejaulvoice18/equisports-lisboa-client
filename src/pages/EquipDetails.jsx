import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipDetails = () => {
    const equips = useLoaderData();
    const { _id, itemName, category, description, price, rating, customization, processTime, stock, equipmentPhoto } = equips;
    
    return (
        <div className='my-10'>
            <h2 className='font-bold text-orange-400 pb-5'>Sports Equipments Details</h2>
            <div className="flex flex-col card-compact bg-base-100 shadow-xl border-spacing-6">
                <figure>
                    <img className='w-full h-96 overflow-clip'
                        src={equipmentPhoto}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-black bg-[#e0e0e0]">
                    <div className='flex flex-col gap-2'>
                        <h2 className="card-title">{itemName}</h2>
                        <p><span className='font-bold'>Category:</span> {category}</p>
                        <p><span className='font-bold'>Price:</span> ৳{price}</p>
                        <h4 className='font-bold pb-3'>Stock: {stock}</h4>
                        <p><span className='font-bold'>Description:</span> {description}</p>
                        <p><span className='font-bold'>Ratings:</span> {rating}</p>
                        <p><span className='font-bold'>Delvery Time:</span> {processTime}</p>
                        <p><span className='font-bold'>Customization:</span> {customization}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipDetails;