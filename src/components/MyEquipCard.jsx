import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const handleDelete = (id) =>{

}
const MyEquipCard = ({equip}) => {
    const {_id, itemName, price, stock, category, equipmentPhoto} = equip;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-2 items-center gap-12">
            <figure>
                <img
                    className='w-40'
                    src={equipmentPhoto}
                    alt="photo" />
            </figure>
            <div className="flex justify-between w-full pr-4 items-center space-x-3">
                <div className='flex flex-col gap-3'>
                    <h2 className="card-title">{itemName}</h2>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{stock}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <Link to={`/updateequip/${_id}`}>
                            <button className="btn btn-success  text-white"><FaEdit size={24}/></button>
                        </Link>
                        <button className="btn btn-error text-white"
                            onClick={() => handleDelete(_id)}
                        ><MdDelete size={24}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEquipCard;