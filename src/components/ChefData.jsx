import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import like from '../assets/like.png'
import Getinspire from './Getinspire';

const ChefData = () => {
   const [chefData, setChefData] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/chefData')
    .then(res => res.json())
    .then(data => setChefData(data))

   },[])
 
   return (
   <div>
    <div className='bg-gray-100  grid md:grid-cols-3 grid-cols-1 gap-5 p-12'>
            {
                chefData.map(data => <div > 

<div className=" card  h-96 glass shadow-md">
  <figure><img className='' src={data.Chef_Picture} alt="car!"/></figure>
  <div className="card-body rounded-xl">
    <h2 className="card-title">{data.name}</h2>
    <p>Experience : {data.years_of_experience} years</p>
    <p> Number of recipes : {data.num_of_recipes}</p>
    <div className='flex'>
    <img className='w-6 h-6' src={like} alt="" /> 
    <p>3.5k</p>

    </div>
    <div className="card-actions justify-end">
     <button className='text-white border-2 btn-outline bg-teal-600 w-full p-2 rounded-xl'>View Recipes </button>
    </div>
  </div>
</div>
              
              
                </div>)
            }
            
           
 </div>

 <Getinspire></Getinspire>
   </div>
    );
};

export default ChefData;