import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../authprovider/AuthProvider';
import { RxCross1 } from "react-icons/rx";

const Register = () => {
    const { createUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [onFocus,setOnFocus] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const regexPassword = /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    const handleOnFocus = () =>{
        setOnFocus(true);

    }
    const handleOnBlur = () => {
        setOnFocus(false);
    }
    const handlePassword = (event) =>{
        setIsPasswordValid(regexPassword.test(event.target.value));
    }
    const submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
  
        createUser(email, password)
            .then(userCredentials => {
                userCredentials.user.displayName = name;
                userCredentials.user.photoURL = photo;
                console.log(password)
                form.reset();
                navigate("/");

            })
            .catch(error => {
                console.log(error.message)
            })


    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Registration Form
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit} action="#" method="POST">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    {
                                        onFocus? <RxCross1 className={isPasswordValid ? 'ms-2 mb-1 text-success' : 'ms-2 mb-1 text-danger'}></RxCross1>
                                        :""
                                    }
                                    
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password" 
                                    onFocus = {handleOnFocus}
                                    onBlur={handleOnBlur}
                                    onChange={handlePassword}
                                    required 
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="photo">Photo URL</label>
                                    <input type="url" className="form-control" id="photo" name="photo" />
                                </div>
                                <button type="submit" className="btn btn-primary mt-4">Register</button>
                                <p className='mt-2'>Already have an account? <Link className='text-decoration-none' to='/login'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;