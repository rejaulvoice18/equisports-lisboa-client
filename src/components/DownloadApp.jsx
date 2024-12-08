import React from 'react';
import Lottie from "lottie-react";
import DownloadIcon from '../../public/download.json'

const DownloadApp = () => {
    return (
        <div className='py-5 text-orange-500 font-bold'>
            <h2>Download Our to have Smooth Purchasing experience </h2>
            <div className='w-2/4 mx-auto'>
                <Lottie animationData={DownloadIcon} loop={true} />
            </div>
        </div>
    );
};

export default DownloadApp;