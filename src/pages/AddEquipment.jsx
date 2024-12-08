import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const AddEquipment = () => {
    const {user} = useContext(AuthContext);

    const handleAddEquipment = e =>{
        e.preventDefault();

        const itemName = e.target.itemName.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processTime = e.target.processTime.value;
        const stock = e.target.stock.value;
        const userEmail = e.target.userEmail.value;
        const userName = e.target.userName.value;
        const equipmentPhoto = e.target.equipmentPhoto.value;

        const newEquip = {itemName, category, description, price, rating, customization, processTime, stock, userEmail, userName, equipmentPhoto};

        // sending data to the database
        fetch('https://equisports-lisboa-server.vercel.app/sports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquip)
        })
        .then(res => res.json())
        .then(data => {
            // successfull message using sweet alert
            if(data.insertedId){
                toast.success('successfully added data')
            }
            e.target.reset();
        })
    }
    return (
        <div className='bg-[#efefef] p-24'>
            <h2 className='font-bold text-2xl bg-[#36ab3f] inline-block px-2 text-white'>Add a Sports Equipment</h2>
            <form onSubmit={handleAddEquipment}>
                {/* item and category row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Item Name</span>
                        </label>
                        <label className='input-group'>
                            <input name="itemName" className='input input-bordered w-full' type="text" placeholder='Item Name' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category Name</span>
                        </label>
                        <label className='input-group'>
                            <input name="category" className='input input-bordered w-full' type="text" placeholder='Category Name' id="" />
                        </label>
                    </div>
                </div>
                {/* description and price row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <label className='input-group'>
                            <input name="description" className='input input-bordered w-full' type="text" placeholder='Description' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <label className='input-group'>
                            <input name="price" className='input input-bordered w-full' type="text" placeholder='Price' id="" />
                        </label>
                    </div>
                </div>
                {/* rating and customization row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Rating</span>
                        </label>
                        <label className='input-group'>
                            <input name="rating" className='input input-bordered w-full' type="text" placeholder='Rating' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Customization</span>
                        </label>
                        <label className='input-group'>
                            <input name="customization" className='input input-bordered w-full' type="text" placeholder='Customization' id="" />
                        </label>
                    </div>
                </div>
                {/* processing time and stock status row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Processing Time</span>
                        </label>
                        <label className='input-group'>
                            <input name="processTime" className='input input-bordered w-full' type="text" placeholder='Processing Time/Deliver Time' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Stock Status</span>
                        </label>
                        <label className='input-group'>
                            <input name="stock" className='input input-bordered w-full' type="text" placeholder='Stock Status' id="" />
                        </label>
                    </div>
                </div>
                {/* user name and user email row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>User Email</span>
                        </label>
                        <label className='input-group'>
                            <input name="userEmail" defaultValue={user && user.email} className='input input-bordered w-full' type="text" placeholder='User Email' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>User Name</span>
                        </label>
                        <label className='input-group'>
                            <input name="userName" defaultValue={user && user.displayName} className='input input-bordered w-full' type="text" placeholder='User Name' id="" />
                        </label>
                    </div>
                </div>
                {/* form equipment photo url row */}
                <div className='mb-5'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Equipment Photo URL</span>
                        </label>
                        <label className='input-group'>
                            <input name="equipmentPhoto" className='input input-bordered w-full' type="text" placeholder='Equipment Photo URL' id="" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Sports Equipment" className='btn btn-block bg-[#e0a823] text-black font-bold' />
            </form>
        </div>
    );
};

export default AddEquipment;