import React, { useEffect, useState } from 'react';
import CatCard from './CatCard';

const SportsCategory = () => {
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        fetch('https://equisports-lisboa-server.vercel.app/sports')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div>
            <h2 className='my-10 font-bold text-xl'>Sports Category</h2>
            <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3'>
                {
                    categorys.map(cate => <CatCard
                        key={cate._id}
                        cat={cate}
                    ></CatCard>)
                }
            </div>
        </div>
    );
};

export default SportsCategory;