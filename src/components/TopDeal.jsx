import React from 'react';

const TopDeal = () => {
    return (
        <div className='my-10'>
            <h2 className='py-10 text-xl font-bold'>Top Deal</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='col-span-1'>
                    <div className='flex gap-5 items-center'>
                        <img className='w-3/4 h-48' src="https://sportsworld.com.bd/wp-content/uploads/2024/11/Tennis-Racket-Head-Redical.png" alt="" />
                        <div className='flex flex-col gap-2'>
                            <h3>Badminton Racket Yonex</h3>
                            <p className='text-red-500'><span className='text-red-400/40 line-through'>৳1,690.00</span>৳1,090.00</p>
                            <button className='py-1.5 px-5 text-white text-xs rounded-xl bg-green-500  bg-green-500/70 hover:bg-green-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img className='w-3/4 h-48' src="https://sportsworld.com.bd/wp-content/uploads/2020/10/DK05ak.jpg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <h3>Electric Treadmill Bolt H7</h3>
                            <p className='text-red-500'><span className='text-red-400/40 line-through'>৳49,590.00</span>৳45,990.00</p>
                            <button className='py-1.5 px-5 text-white text-xs rounded-xl bg-green-500  bg-green-500/70 hover:bg-green-500'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='flex gap-5 items-center'>
                        <img className='w-3/4 h-48' src="https://sportsworld.com.bd/wp-content/uploads/2021/08/A1-Pro-1.jpg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <h3>Foldable WalkingPad A1 Pro</h3>
                            <p className='text-red-500'><span className='text-red-400/40 line-through'>৳1,690.00</span>৳1,090.00</p>
                            <button className='py-1.5 px-5 text-white text-xs rounded-xl  bg-green-500/70 hover:bg-green-500 bg-green-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img className='w-3/4 h-48' src="https://sportsworld.com.bd/wp-content/uploads/2024/11/unnamed-file.png" alt="" />
                        <div className='flex flex-col gap-2'>
                            <h3>Badminton Racket Adidas</h3>
                            <p className='text-red-500'><span className='text-red-400/40 line-through'>৳1,690.00</span>৳1,090.00</p>
                            <button className='py-1.5 px-5 text-white text-xs rounded-xl bg-green-500/70 hover:bg-green-500'>Add to cart</button>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
    );
};

export default TopDeal;