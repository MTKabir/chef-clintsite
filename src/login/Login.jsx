import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from 'react-icons/si';
import { UserContext } from '../authprovider/AuthProvider';


const Login = () => {
    const {signInUser,user} = useContext(UserContext);
   
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const submit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
        signInUser(username,password)
        .then((userCredentials) =>{
            userCredentials.user = user;
            navigate(from)
            form.reset();
        })
        .catch(error =>{
            console.log(error.message);
        })

    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter your username" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required/>
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                                <p className='pt-2 pb-2'>New to wanganama? <Link to='/registration' className='text-decoration-none'>Get started</Link></p>
                                <div className='d-flex flex-row align-items-center'>
                                    <div className='border border-1 w-100 h-25 '></div>
                                    <span className='ms-2 me-2'> or </span>
                                    <div className='border border-1 w-100 h-25'></div>
                                </div>
                                <button type="submit" className="p-2 mb-2 card w-100 d-flex flex-row justify-content-center align-items-center"><FcGoogle className='fs-3'></FcGoogle><span className='ms-2'>Login with google</span></button>
                                <button type="submit" className="p-2 mb-2 card w-100 d-flex flex-row justify-content-center align-items-center"><SiGithub className='fs-3'></SiGithub><span className='ms-2'>Login with github</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;