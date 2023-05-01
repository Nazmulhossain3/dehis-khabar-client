import React from "react";

const Getinspire = () => {
  return (
    <div className="bg-gray-100  ">
 <h2 className=" font-bold text-3xl text-center text-orange-300">Our Special Dishes</h2>


  <div className="grid md:grid-cols-3 grid-cols-1 p-6" >
  
  <div className="card w-96">
  <div className="card-body ">
    <img className="rounded-2xl border-2 p-2" src="https://www.upoharbd.com/images/uploads/Food/Nobabi_vog_Dhaka.jpg" alt="" />
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
 
 
  <div className="card w-96">
  <div className="card-body ">
    <img className="rounded-2xl border-2 p-2" src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/kacchi_bhai/items/kacchi_bhai_kacchi_khadok_thumbnail_1649580256406.jpeg" alt="" />
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  
  <div className="card w-96">
  <div className="card-body ">
    <img className="rounded-2xl border-2 p-2" src="https://static.hungrynaki.com/hungrynaki-v4/restaurants/kacchi_bhai/items/kacchi_bhai_basmati_kacchi_for_5_persons_thumbnail_1649581091345.jpeg" alt="" />
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  </div>
  
  
    </div>
  );
};

export default Getinspire;
