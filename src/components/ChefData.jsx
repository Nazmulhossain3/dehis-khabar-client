import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefData = () => {
   const [chefData, setChefData] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/chefData')
    .then(res => res.json())
    .then(data => setChefData(data))

   },[])
 
   return (
        <div className='bg-gray-100  grid md:grid-cols-3 grid-cols-1 gap-5 p-12'>
            {
                chefData.map(data => <div > 

<div className=" card  h-96 glass shadow-md">
  <figure><img className='' src={data.Chef_Picture} alt="car!"/></figure>
  <div className="card-body rounded-xl">
    <h2 className="card-title">{data.name}</h2>
    <p>Experience : {data.years_of_experience} years</p>
    <p> Number of recipes : {data.num_of_recipes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
              
              
                </div>)
            }
        </div>
    );
};

export default ChefData;