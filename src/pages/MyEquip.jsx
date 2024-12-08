import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyEquipCard from '../components/MyEquipCard';
import Title from '../components/Title';

const MyEquip = () => {
    Title('My Equipment')
    const loadedEquip = useLoaderData()
    const [equips, setEquips] = useState(loadedEquip);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='space-y-3'>
                {
                    equips.map(equip => <MyEquipCard
                        key={equip._id}
                        equip={equip}
                        equips={equips}
                        setEquips={setEquips}
                    ></MyEquipCard>)
                }
            </div>
        </div>
    );
};

export default MyEquip;