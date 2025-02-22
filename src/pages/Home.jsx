import React from 'react';
import ProductSection from '../components/ProductSection';
import Banner from '../components/Banner';
import SportsCategory from '../components/SportsCategory';
import DownloadApp from '../components/DownloadApp';
import TopBrands from '../components/TopBrands';
import Title from '../components/Title';
import TopDeal from '../components/TopDeal';

const Home = () => {
    Title('Home')
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <SportsCategory></SportsCategory>
            <ProductSection></ProductSection>
            <DownloadApp></DownloadApp>
            <TopBrands></TopBrands>
            <TopDeal></TopDeal>
        </div>
    );
};

export default Home;