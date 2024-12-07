import React from 'react';

const Login = () => {

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // user sign in
        
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none shadow-2xl p-10">
                <h2 className='text-2xl font-semibold text-center text-[#123456] pt-4'>Login your account</h2>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#123456]">Email</span>
                        </label>
                        <input ref={emailRef} name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#123456]">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered " required />
                        {
                            error.login && (
                                <label className="label text-xs text-red-600">
                                    {error.login}
                                </label>
                            )}
                        <label className="label">
                            <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover text-[#123456]">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#123456] hover:bg-green-900 text-white rounded-none">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>OR</p>
                <Link onClick={handleSignInPopUp} className='text-center font-semibold'>Login with google</Link>
                <div className='divider'></div>
                <p className='text-center font-semibold'>Don't have an account? <Link to="/signup" className='text-red-600'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;