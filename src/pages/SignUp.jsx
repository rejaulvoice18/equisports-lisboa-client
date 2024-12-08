import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = e =>{
        e.preventDefault()

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passRegex.test(password)){
            toast.error('Password must have uppercase, lowercase & 6 char long')
        }

        // creating new user
        createNewUser(email, password)
        .then(result=>{
            const newUser = result.user;
            setUser(newUser);
            updateUserProfile({displayName: name, photoURL: photo})
            .then(()=>{
                navigate('/')
            })
            .catch(err=>{

            })
            toast.success('account created successfully')
            
        })
        .catch(err => {
        })


    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none shadow-2xl p-10">
                <h2 className='text-2xl font-semibold text-center pt-4 text-[#e0a823]'>Register Your Account</h2>
                <form onSubmit={handleSignUp} className="card-body">
                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-600">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        {/* {
                            error.name && (
                                <label className="label text-xs text-red-600">
                                    {error.name}
                                </label>)
                        } */}
                    </div>
                    {/* photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-600">Photo</span>
                        </label>
                        <input name='photo' type="text" placeholder="photo-url" className="input input-bordered" required />
                    </div>
                    {/* email input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-600">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-green-600">Password</span>
                        </label>
                        <input name='password'
                            type='password'
                            placeholder="password" className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#e0a823] hover:bg-green-900 text-white rounded-none">Sign Up</button>
                    </div>
                </form>
                <Link className='text-center font-semibold'>Sign Up with google</Link>
                
            </div>
        </div>
    );
};

export default SignUp;