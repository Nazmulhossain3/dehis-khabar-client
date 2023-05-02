import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Getinspire from './Getinspire';
import ChefDetail from './ChefDetail';

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
                chefData.map(data => <ChefDetail 
                data={data}
                key={data.id}
                ></ChefDetail>)
 }
            
           
 </div>

 <Getinspire></Getinspire>
   </div>
    );
};

export default ChefData;