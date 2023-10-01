import React from 'react';
import { BiLike } from "react-icons/bi";
import './Chef.css'
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, chefName, yearsOfExperience, numberOfRecipes, likes, chefPicture } = chef;

    return (
        <div className='col-6 mb-4'>
            <div className='card' >
                <img className='p-4 image' src={chefPicture} alt="no image available" />
                <div className='ps-4 pe-4'>
                    <h5 className="card-title">{chefName}</h5>
                    <p>Years of experience : {yearsOfExperience}</p>
                    <p>Number of recepies : {numberOfRecipes}</p>
                    <p className='d-flex align-items-center w-25'><BiLike className='text-primary fs-1'></BiLike> <span className='ms-2'>{likes}</span></p>
                </div>
                <div className='ms-4 mb-4'>
                    <Link to={`/chef/${id}`} className='text-decoration-none'>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;