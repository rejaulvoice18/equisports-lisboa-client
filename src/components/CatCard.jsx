import React from 'react';

const CatCard = ({cat}) => {
    const {category, equipmentPhoto} = cat;
    return (
        <div className='flex flex-col items-center'>
            <img 
            className='w-24 rounded-full border-2 h-24 p-1'
            src={equipmentPhoto} alt="" />
            <h3>{category}</h3>
        </div>
    );
};

export default CatCard;