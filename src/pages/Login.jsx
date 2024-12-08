import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import Title from '../components/Title';

const Login = () => {
    Title('Login')
const {signInUser, setUser, popUpSignIn} = useContext(AuthContext);
const location = useLocation()
const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // user sign in
        signInUser(email, password)
        .then(result => {
            const currUser = result.user;
            setUser(currUser);
            toast.success('Successfully Signed In')
            navigate(location?.state ? location.state :'/')

        })
        .catch(err=>{
            toast.error('Wrong Credentials')
        })
    }

    const handleSignInPopUp = () => {
        popUpSignIn()
        .then(result=>{
            setUser(result.user)
            navigate('/')
        })
        .catch(()=>{

        })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none shadow-2xl p-10">
                <h2 className='text-2xl font-semibold text-center text-[#e0a823] pt-4'>Login your account</h2>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#123456]">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#123456]">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered " required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-[#123456]">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#e0a823] hover:bg-[#36ab3f] text-white rounded-none">Login</button>
                    </div>
                </form>
                <Link onClick={handleSignInPopUp} className='text-center font-semibold'>Login with google</Link>
               
            </div>
        </div>
    );
};

export default Login;