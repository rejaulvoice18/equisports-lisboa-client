import React from 'react';
import ProductSection from '../components/ProductSection';
import Banner from '../components/Banner';
import SportsCategory from '../components/SportsCategory';
import DownloadApp from '../components/DownloadApp';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <SportsCategory></SportsCategory>
            <ProductSection></ProductSection>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;