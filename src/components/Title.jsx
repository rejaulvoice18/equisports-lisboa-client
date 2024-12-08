import React, { useEffect } from 'react';

const Title = (title) => {
    useEffect(()=>{
        document.title = `${title} | EquiSports-Lisboa`
    },[])
};

export default Title;