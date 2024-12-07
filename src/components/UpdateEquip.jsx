import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const UpdateEquip = () => {
    const {user} = useContext(AuthContext);
    const loadedEquip = useLoaderData()
    const{_id, itemName, category, description, price, rating, customization, processTime, stock, userEmail, userName, equipmentPhoto} = loadedEquip;


    const handleUpdateEquipment = e =>{
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

        const updatedEquip = {itemName, category, description, price, rating, customization, processTime, stock, userEmail, userName, equipmentPhoto};

        // sending data to the database
        fetch(`http://localhost:5000/sports/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedEquip)
        })
        .then(res => res.json())
        .then(data => {
            // successfull message using sweet alert
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('successfully Updated Data')
                e.target.reset();
            }
            
        })
    }
    return (
        <div className='bg-[#efefef] p-24'>
            <h2 className='font-bold text-2xl bg-[#36ab3f] inline-block px-2 text-white'>Updated Sports Equipment</h2>
            <form onSubmit={handleUpdateEquipment}>
                {/* item and category row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Item Name</span>
                        </label>
                        <label className='input-group'>
                            <input name="itemName" defaultValue={itemName} className='input input-bordered w-full' type="text" placeholder='Item Name' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Category Name</span>
                        </label>
                        <label className='input-group'>
                            <input name="category" defaultValue={category} className='input input-bordered w-full' type="text" placeholder='Category Name' id="" />
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
                            <input name="description" defaultValue={description} className='input input-bordered w-full' type="text" placeholder='Description' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <label className='input-group'>
                            <input name="price" defaultValue={price} className='input input-bordered w-full' type="text" placeholder='Price' id="" />
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
                            <input name="rating" defaultValue={rating} className='input input-bordered w-full' type="text" placeholder='Rating' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Customization</span>
                        </label>
                        <label className='input-group'>
                            <input name="customization" defaultValue={customization} className='input input-bordered w-full' type="text" placeholder='Customization' id="" />
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
                            <input name="processTime" defaultValue={processTime} className='input input-bordered w-full' type="text" placeholder='Processing Time/Deliver Time' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Stock Status</span>
                        </label>
                        <label className='input-group'>
                            <input name="stock" defaultValue={stock} className='input input-bordered w-full' type="text" placeholder='Stock Status' id="" />
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
                            <input name="equipmentPhoto" defaultValue={equipmentPhoto} className='input input-bordered w-full' type="text" placeholder='Equipment Photo URL' id="" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Sports Equipment" className='btn btn-block bg-[#e0a823] text-black font-bold' />
            </form>
        </div>
    );
};

export default UpdateEquip;