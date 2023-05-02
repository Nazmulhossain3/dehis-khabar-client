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
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Blog from './components/Blog.jsx';
import ChefData from './components/ChefData.jsx';
import ChefPages from './components/ChefPages.jsx';
import ErrorPage from '../../milestone--9-react-router/heroGadget-complete/src/components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Banner></Banner>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/chefData',
        element : <ChefData></ChefData>,
        
      },
      {
        path : '/chefData/:id',
        element : <ChefPages></ChefPages>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
