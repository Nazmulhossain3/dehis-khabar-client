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

import AuthProvider from './components/Provider/AuthProvider.jsx';
import PrivateRoute from './components/Route/PrivateRoute.jsx';
import ErrorPage from './components/ErrorPage.jsx';

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
        element :<PrivateRoute><ChefPages></ChefPages></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
