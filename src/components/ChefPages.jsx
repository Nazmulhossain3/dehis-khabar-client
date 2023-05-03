import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import like from '../assets/like.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefPages = () => {
    const [chefPages, setChefPages] = useState({})
    const [disabled, setDisabled] = useState(false);
   
  
    const {id} = useParams()

    useEffect(()=>{
    
        fetch(`http://localhost:5000/chefData/${id}`)
        .then(res => res.json())
        .then(data => setChefPages(data))


    },[])

    const {name,Chef_Picture,years_of_experience,num_of_recipes,bio,
     cooking_method,ingredients,rating,recipes
    } = chefPages
    console.log(chefPages)

    
    const handleClick = () =>{
     toast('the recipe is your favorite')
    setDisabled(true)

   }

   const handleFavorite = ()=> {
    toast('the recipe is your favorite')
    setDisabled(true)

   }
    

   const handleAddFavourite = () => {
    toast('the recipe is your favorite')
  //  return setDisabled(true)

   }
    return (
 <div>

 <div className="card lg:card-side bg-base-100 shadow-xl  p-6">
  <figure><img src={Chef_Picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{bio}</p>
    <p> Number of Recipes : {num_of_recipes}</p>
    <p> Experience : {years_of_experience} years</p>
        <div className='flex'>
        <img className='w-6 h-6 text-red-600' src={like} alt="" />
        <p>3.5k</p>
        </div>
    </div>
  </div>

    {/* here recipe section */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6'>

    <div className="card hover:bg-gray-100 bg-teal-100 shadow-xl mt-6">
  <div className="card-body">
    <h2 className="card-title">Name :{recipes?.[0]}</h2>
    <div>
        <p><span className='text-bold'> Ingredients  </span>  : 
            {ingredients?.[0]} ,
            {ingredients?.[1]},
            {ingredients?.[2]},
            {ingredients?.[3]},
            {ingredients?.[4]},
        
        </p>
    </div>
  
    <p className=''>Cooking Method : {cooking_method}</p>
    <p>Rating : {rating}
    <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    
    </p>
    <div className="card-actions justify-end">
      <button onClick={handleClick} disabled={disabled} className='border-2 p-2 w-full btn-outline  rounded-2xl bg-teal-600 text-white'>Add to Favorite</button>
    </div>
  </div>
   
   
   
    
    
    
    
    </div>
    
    
    <div className="card hover:bg-gray-100 bg-teal-100 shadow-xl mt-6">
    <div className="card-body">
    <h2 className="card-title">Name :{recipes?.[1]}</h2>
    <div>
        <p><span className='text-bold'> Ingredients  </span>  : 
            {ingredients?.[0]} ,
            {ingredients?.[1]},
            {ingredients?.[2]},
            {ingredients?.[3]},
            {ingredients?.[4]},
        
        </p>
    </div>
  
    <p className=''>Cooking Method : {cooking_method}</p>
    <p>
      Rating : {rating}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    
    
    </p>
    <div className="card-actions justify-end">
      <button disabled={disabled} onClick={handleFavorite} className='border-2 p-2 w-full btn-outline rounded-2xl bg-teal-600 text-white'>Add to Favorite</button>
    </div>
  </div>
    </div>
    <div className="card hover:bg-gray-100  bg-teal-100 shadow-xl mt-6">
    <div className="card-body">
    <h2 className="card-title">Name :{recipes?.[2]}</h2>
    <div>
        <p><span className='text-bold'> Ingredients  </span>  : 
            {ingredients?.[0]} ,
            {ingredients?.[1]},
            {ingredients?.[2]},
            {ingredients?.[3]},
            {ingredients?.[4]},
        
        </p>
    </div>
  
    <p className=''>Cooking Method : {cooking_method}</p>
    <p>Rating : {rating}
    <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    
    </p>
    <div className="card-actions justify-end">
      <button disabled={disabled} onClick={handleAddFavourite} className='border-2 p-2 w-full btn-outline rounded-2xl bg-teal-600 text-white'>Add to Favorite</button>
    </div>
  </div>
    </div>

    
    

   </div>


<ToastContainer></ToastContainer>
</div>


 
    );
};

export default ChefPages;