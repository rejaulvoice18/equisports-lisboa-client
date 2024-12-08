import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#36ab3f] text-white p-10'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl font-bold'>Join Our Newsletter</h2>
                    <p className='text-xs'>And Get 20% OFF your First Order</p>
                </div>
                <div>
                    <form>
                        <fieldset className="form-control w-80">
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email address"
                                    className="input input-bordered join-item" />
                                <button className="btn bg-[#36ab3f] join-item text-white">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className='divide-solid py-8'>
                <hr />
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <p>Shop</p>
                    <p>Reviews</p>
                    <p>Faq</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>EquiSports-Lisboa</h2>
                </div>
                <div className='flex gap-5'>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                </div>
            </div>
            {/* <footer className="footer  ">
            <div className='divide-solid'>

            </div>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to="/about" className="link link-hover">About us</Link>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn bg-orange-600 join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer> */}
        </div>
    );
};

export default Footer;