import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from '../layout/Layout';
import ErrorPage from '../error/ErrorPage';
import Blog from '../blog/Blog';
import Login from '../login/Login';
import Home from '../home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children :[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path:"/login",
                element: <Login></Login>
            }

        ]
    },
]);

const Router = () => {

    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;