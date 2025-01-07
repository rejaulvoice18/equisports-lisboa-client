import React from 'react';
import { Link } from 'react-router-dom';

const EquipCard = ({equip}) => {
    const {_id, itemName, category, price, rating, stock, equipmentPhoto, description } = equip;
    return (
        <div className="flex flex-col card-compact shadow-xl shadow-gray-200 border-spacing-6 hover:bg-green-500/40 p-3 rounded-md">
            <figure>
                <img className='w-36 h-36 md:w-3/4 md:h-40 overflow-clip rounded-md mx-auto'
                    src={equipmentPhoto}
                    alt="Shoes" />
            </figure>
            <div className="items-center mt-3">
                <div className='flex flex-col flex-grow items-center'>
                    <h2 className="card-title text-center text-xs md:text-[16px]">{itemName}</h2>
                    <p>{category}</p>
                    <p className='text-green-500 font-bold'>৳{price}.00</p>
                    <h4 className='font-bold text-orange-500'>Stock: {stock}</h4>
                    <p>{description.substring(0,60)}.....</p>
                </div>
                <div className="flex items-center mx-auto mt-3">
                    <Link to={`/details/${_id}`} className="border-2 border-green-500 py-1 px-2 rounded-full text-xs hover:bg-green-600 hover:text-white mx-auto"> READ MORE </Link>
                </div>
            </div>
        </div>
    );
};

export default EquipCard;