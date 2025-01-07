import React from 'react';
import { Link } from 'react-router-dom';

const CatCard = ({ cat }) => {
    const { category, equipmentPhoto } = cat;
    return (
        <Link to='/allsports' className=' cursor-pointer'>
            <div className='flex flex-col items-center '>
                <img
                    className='w-12 h-12 md:w-24 md:h-24 rounded-full border-2 p-1 hover:bg-green-500/40'
                    src={equipmentPhoto} alt="" />
                <h3>{category}</h3>
            </div>
        </Link>
    );
};

export default CatCard; 