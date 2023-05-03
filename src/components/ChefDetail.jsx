import React, { useContext } from 'react';
import like from '../assets/like.png'
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import LazyLoad from 'react-lazy-load';

const ChefDetail = ({data}) => {

  const {loading} = useContext(AuthContext)
  if(loading){
    return   <div>
    <LazyLoad height={762}>
      <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
    </LazyLoad>
  </div>
  }


    const {id,name,Chef_Picture,years_of_experience,num_of_recipes} = data
    return ( 
        
    <div className=" card  h-96 glass shadow-md">
  <figure><img className='' src={Chef_Picture} alt="car!"/></figure>
  <div className="card-body rounded-xl">
    <h2 className="card-title">{name}</h2>
    <p>Experience : {years_of_experience} years</p>
    <p> Number of recipes : {num_of_recipes}</p>
    <div className='flex'>
    <img className='w-6 h-6' src={like} alt="" /> 
    <p>3.5k</p>

    </div>
    <div className="card-actions justify-end">
   <Link to={`/chefData/${id}`}>
   <button className='text-white border-2 btn-outline bg-teal-600 md:w-full p-2 rounded-xl'>View Recipes </button>
  </Link>
   
    </div>
  </div>
</div>
    
    );
};

export default ChefDetail;