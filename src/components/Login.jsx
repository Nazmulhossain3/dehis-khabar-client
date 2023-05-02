import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-2xl font-bold">Please Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
           
             <p> Create New Account ? <Link className='underline' to='/register'>
             Register
                </Link>  </p>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <div className=' text-white border-2 p-2 rounded-lg bg-slate-950 flex items-center mx-auto w-full gap-2'> <FaGoogle></FaGoogle> 
         <span>Login With Google</span>
         </div>

        <div className=' text-white border-2 p-2 rounded-lg bg-slate-950 flex items-center mx-auto w-full gap-2'>
        <FaGithub></FaGithub>
         <span>Login With GitHub</span>
         </div>

      </div>
    </div>
  </div>
</div>
    );
};

export default Login;