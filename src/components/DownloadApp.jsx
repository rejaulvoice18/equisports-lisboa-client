import React from 'react';
import Lottie from "lottie-react";
import DownloadIcon from '../../public/download.json'

const DownloadApp = () => {
    return (
        <div className='py-5 text-balck font-bold'>
            <h2>Download Our to have Smooth Purchasing experience </h2>
            <div className='bg-[#e0e0e0] rounded-3xl'>
                <div className='p-10'>
                    <div className='bg-[#36ab3f] p-10 rounded-3xl opacity-95'>
                        <div className='w-2/4 mx-auto '>
                            <Lottie animationData={DownloadIcon} loop={true} />
                        </div>
                    </div>
                </div>
                <div className='pb-5 text-center' >
                    <h2 className='  text-4xl font-bold uppercase'>Download Our App</h2>
                    <p>Download The App And Shop Unlimited From Anywhere</p>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;