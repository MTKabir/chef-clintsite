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
import SingleChef from '../chef/SingleChef';
import Register from '../register/Register';
import AuthProvider from '../authprovider/AuthProvider';
import PrivateRoute from './privateroute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: 
                <PrivateRoute>
                    <Blog></Blog>
                </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/chef/:id",
                element: <SingleChef></SingleChef>,
                loader: ({ params }) => fetch(`http://localhost:4000/chef/${params.id}`)
            }, {
                path: "/registration",
                element: <Register></Register>
            }

        ]
    },
]);

const Router = () => {

    return (
        <AuthProvider>
            <RouterProvider router={router}>

            </RouterProvider>
        </AuthProvider>
    );
};

export default Router;