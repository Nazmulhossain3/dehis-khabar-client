import React from "react";
import Pdf from 'react-to-pdf';
import { useRef } from 'react';
import { FaRegFilePdf } from "react-icons/fa";


const Blog = () => {
  const ref = useRef();
  return (
    <div className="App">
			<Pdf targetRef={ref} filename="document.pdf">
				{({ toPdf }) => (
					<button onClick={toPdf} className=" flex items-center mb-4 text-white rounded-lg button p-2 bg-teal-500 border-2">
					<FaRegFilePdf></FaRegFilePdf>	Generate PDF
					</button>
				)}
			</Pdf>
			<div ref={ref}>{
          <div className=" min-h-screen bg-base-200">
          <div className=" p-4">
            <div className="">
              <h1 className="text-2xl font-bold text-justify ">
                1. Tell us the differences between uncontrolled and controlled
                components.?
              </h1>
              <p className="">
                Ans : Uncontrolled components are components that do not maintain
                their own state. <br /> This means that their behavior and
                appearance cannot be controlled by the parent component.{" "}
              </p>
              <p>
                Controlled components, on the other hand, maintain their own state
                and behavior. This means that their <br /> appearance and behavior
                can be controlled by the parent component.{" "}
              </p>
            </div>
    
            <div className="">
              <h1 className="text-2xl font-bold text-justify ">
                2. How to validate React props using PropTypes.?
              </h1>
              <p className="">
                {" "}
                Ans : To validate React props using PropTypes, you can use the
                PropTypes library, which is available as a separate package in the
                npm registry. React PropTypes validators  : <br /> The prop can be of
                any data type. <br /> bool : The prop should be a Boolean. <br /> number : The
                prop should be a number. <br /> string : The prop should be a string. <br /> func
                : The prop should be a function. <br /> array : The prop should be an
                array. object : The prop should be an object.{" "}
              </p>
            </div>
         
    
            <div className="">
              <h1 className="text-2xl font-bold text-justify ">
                3. Tell us the difference between nodejs and express js.?
              </h1>
              <p className="">
                {" "}
                Ans : Node.js is a runtime environment for executing JavaScript code outside of a browser. It provides an environment for running JavaScript on the server-side. Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of tools and features for building web applications with Node.js.{" "}
              </p>
            </div>
         
            <div className="">
              <h1 className="text-2xl font-bold text-justify ">
                4. What is a custom hook, and why will you create a custom hook?
              </h1>
              <p className="">
                {" "}
                Ans : In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. It's a way to extract common logic from components and share it between them. Custom hooks follow a specific naming convention in React: their names must start with the word "use" to indicate that they are hooks{" "}
              </p>
            </div>
         
         
         
          </div>
    
        
    
        </div>
      }</div>
		</div>
 
 );
};

export default Blog;
