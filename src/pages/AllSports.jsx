import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Title from '../components/Title';

const AllSports = () => {
    Title('All Sports Equipment')
    const loadedEquips = useLoaderData()
    const [equips, setEquips] = useState(loadedEquips);

    const handleSort = () =>{
        const sortedData = [...equips].sort((a, b) => a.price - b.price)
        setEquips(sortedData);
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between'>
                <h2 className='text-2xl py-3'>Available Equipments:{equips.length}</h2>
                <button onClick={handleSort} className='btn bg-orange-500 text-white hover:bg-[#36ab3f]'>Sort by Price</button>
            </div>
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
                                <td>{equip.rating}</td>
                                <td>{equip.stock}</td>
                                <td>৳ {equip.price}</td>
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