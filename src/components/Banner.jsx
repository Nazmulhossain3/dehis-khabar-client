import React from "react";

const Banner = () => {
  return (
    <div className="hero p-6 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pKvGpUdV3PcNH2CvMvzjWoKEgX67KLMR7g&usqp=CAU'
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-2xl font-bold">Welcome to Dhesi Khabar!</h1>
          <p className="py-6">
          Deshi food, also known as Bangladeshi cuisine, refers to the  <br /> traditional dishes and cooking styles of Bangladesh. It is a blend <br /> of various flavors and cooking techniques, influenced by the country's <br /> geography, history, and cultural diversity.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
