import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyEquipCard from '../components/MyEquipCard';

const MyEquip = () => {
    const loadedEquip = useLoaderData()
    const [equips, setEquips] = useState(loadedEquip);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='space-y-3'>
                {
                    equips.map(equip => <MyEquipCard
                        key={equip._id}
                        equip={equip}
                    ></MyEquipCard>)
                }
            </div>
        </div>
    );
};

export default MyEquip;