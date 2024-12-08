import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';


const MyEquipCard = ({ equip, equips, setEquips }) => {
    const { _id, itemName, price, stock, category, equipmentPhoto } = equip;



    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/sports/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Equip has been deleted.",
                                icon: "success"
                            });
                            const remainingEquip = equips.filter(equip => equip._id !== _id);
                            setEquips(remainingEquip);
                        }
                    })
            }
        });
    }

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
                            <button className="btn btn-success  text-white"><FaEdit size={24} /></button>
                        </Link>
                        <button className="btn btn-error text-white"
                            onClick={() => handleDelete(_id)}
                        ><MdDelete size={24} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEquipCard;