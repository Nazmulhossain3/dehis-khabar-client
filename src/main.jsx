import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home.jsx';
import Banner from './components/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children : [
      {
        path : '/',
        element : <Banner></Banner>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
