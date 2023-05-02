import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from './Provider/AuthProvider';

const Login = () => {

  const {signIn,user} = useContext(AuthContext)

const handleLogIn = (event)=> {
  event.preventDefault()
  const form = event.target 
  const email = form.email.value 
  const password = form.password.value
  console.log(email,password)

  signIn(email,password)
  .then(result => {
    const signInUser = result.user
    console.log(signInUser)
  })
  .catch(error => {
    console.log(error)
  })

}

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-2xl font-bold">Please Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
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

      </form>
    </div>
  </div>
</div>
    );
};

export default Login;