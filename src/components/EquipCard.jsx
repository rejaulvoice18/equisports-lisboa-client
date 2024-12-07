import React from 'react';
import { Link } from 'react-router-dom';

const EquipCard = ({equip}) => {
    const {_id, itemName, category, price, rating, stock, equipmentPhoto } = equip;
    return (
        <div className="flex flex-col card-compact bg-base-100 shadow-xl border-spacing-6">
            <figure>
                <img className='w-full h-56 overflow-clip'
                    src={equipmentPhoto}
                    alt="Shoes" />
            </figure>
            <div className="card-body text-black bg-[#e0e0e0] hover:bg-[#e0a823]">
                <div className='flex-grow'>
                    <h2 className="card-title">{itemName}</h2>
                    <p>{category}</p>
                    <p>৳{price}</p>
                    <h4 className='font-bold'>Stock: {stock}</h4>
                </div>
                <div className="card-actions">
                    <Link to={`/details/${_id}`} className="border-2 border-black py-1 px-2 rounded-full text-xs hover:bg-orange-600 hover:text-white"> READ MORE </Link>
                </div>
            </div>
        </div>
    );
};

export default EquipCard;