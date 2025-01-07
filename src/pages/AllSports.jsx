import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Title from '../components/Title';
import AllEqupCard from '../components/AllEqupCard';
import EquipCard from '../components/EquipCard';

const AllSports = () => {
    Title('All Sports Equipment')
    const loadedEquips = useLoaderData()
    const [equips, setEquips] = useState(loadedEquips);

    const handleSort = () =>{
        const sortedData = [...equips].sort((a, b) => a.price - b.price)
        setEquips(sortedData);
    }
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='flex justify-between'>
                <h2 className='text-2xl pb-3'>Available Equipments:{equips.length}</h2>
                <button onClick={handleSort} className='btn bg-orange-500 text-white hover:bg-[#36ab3f]'>Sort by Price</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    equips.map(equip => <EquipCard
                       key={equip._id}
                       equip={equip} 
                    ></EquipCard>)
                }
            </div>
        </div>
    );
};

export default AllSports;