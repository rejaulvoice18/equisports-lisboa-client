import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllSports = () => {
    const loadedEquips = useLoaderData()
    const [equips, setEquips] = useState(loadedEquips);
 
    
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl py-3'>Available Equipments:{equips.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-orange-500 font-bold'>Item Name</th>
                            <th className='text-orange-500 font-bold'>Category</th>
                            <th className='text-orange-500 font-bold'>Rating</th>
                            <th className='text-orange-500 font-bold'>Stock</th>
                            <th className='text-orange-500 font-bold'>price</th>
                            <th className='text-orange-500 font-bold'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            equips.map(equip => <tr key={equip._id}>
                                <td>{equip.itemName}</td>
                                <td>{equip.category}</td>
                                <td>{equip.price}</td>
                                <td>{equip.stock}</td>
                                <td>{equip.rating}</td>
                                <td>
                                    
                                    <Link to={`/details/${equip._id}`} > 
                                    <button className='btn'>View Details</button> </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSports;