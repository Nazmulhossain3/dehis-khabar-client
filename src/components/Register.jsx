import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-2xl font-bold">Please Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
   
      <div className="card-body">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='text' placeholder="name" className="input input-bordered" />
        </div>
     
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
        </div>
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
     
    
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <p>Already have an account ? <Link className='underline' to='/login'>Login</Link> </p>
          </label>
        </div>
       
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;