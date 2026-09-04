import React, { useEffect } from 'react';
import {RouterProvider} from 'react-router'
import {createBrowserRouter} from 'react-router'
import PublicProtected from './protected/PublicProtected';
import AuthLayout from '../app/Layouts/AuthLayout';
import LoginPage from '../features/auth/ui/pages/LoginPage';
import RegisterPage from '../features/auth/ui/pages/RegisterPage';
import MainLayout from '../app/Layouts/MainLayout';
import MainProtected from './protected/MainProtected';
import HomePage from '../shared/ui/pages/HomePage';
import ProductPage from '../features/products/ui/pages/ProductPage';
import CartPage from '../features/cart/ui/pages/CartPage';
import OrderPage from '../features/orders/ui/pages/OrderPage';
import { hydrationApi } from '../features/auth/api/AuthApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/state/authSlice';


const AppRoutes = () => {
    let dispatch=useDispatch()

    useEffect(()=>{
        (async()=>{
            try{
    let response = await hydrationApi()
    console.log(response)
    dispatch(addUser(response))
            }catch(error){

            }
        })()
    },[])
    let router = createBrowserRouter([
        {
            path:"/",
            element:<PublicProtected />,
            children:[
                {
                    path:"",
                    element:<AuthLayout />,
                    children:[
                        {
                            path:"",
                            element:<LoginPage />
                        },{
                            path:"/register",
                            element:<RegisterPage />
                        }
                    ]
                }
            ]
        },
        {
            path:"/main",
            element:<MainProtected />,
            children:[
                {
                    path:"",
                    element:<MainLayout />,
                    children:[
                        {
                            path:"",
                            element:<HomePage />
                        },
                         {
                            path:"products",
                            element:<ProductPage />
                        },
                     {
                            path:"cart",
                            element:<CartPage />
                        },
                         {
                            path:"order",
                            element:<OrderPage />
                        }
                    ]
                }
            ]
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRoutes;
