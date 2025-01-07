import React, { useEffect, useState } from 'react';
import EquipCard from './EquipCard';

const ProductSection = () => {
    const [equips, setEquip] = useState([])

    useEffect(() => {
        fetch('https://equisports-lisboa-server.vercel.app/sports')
            .then(res => res.json())
            .then(data => setEquip(data))
    }, [])

    return (
        <div>
            <h2 className='py-10 font-bold text-xl'>Product Section</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6'>
                {
                    equips.slice(0, 8).map(equip => <EquipCard
                        key={equip._id}
                        equip={equip}

                    ></EquipCard>)
                }
            </div>
        </div>
    );
};

export default ProductSection;