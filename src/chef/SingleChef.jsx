import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { useLoaderData, useParams } from 'react-router-dom';
import Recepies from './Recepies';

const SingleChef = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { chefName, yearsOfExperience, numberOfRecipes, likes, chefPicture, bio,recipes } = data;
    
    return (
        <div className='border border-secondary rounded rounded-2 ms-1 me-1 row'>
            <div className='col-6'>
                <div className='p-2'>
                    <img className='image rounded' src={chefPicture} alt="" />
                </div>
            </div>
            <div className='col-6 p-2'>
                <div >
                    <h5 className="card-title">{chefName}</h5>
                    <p className='mt-2'><span className='fw-bold'>About me :</span> {bio}</p>
                    <p>Years of experience : {yearsOfExperience}</p>
                    <p>Number of recepies : {numberOfRecipes}</p>
                    <p className='d-flex align-items-center w-25'><BiLike className='text-primary fs-1'></BiLike> <span className='ms-2'>{likes}</span></p>
                </div>

            </div>
            <div className='col-12'>
                <p className='d-flex justify-content-center fw-bold fs-3'>Recepies</p>
                <div className='row p-3'>
                    {
                        recipes.map(rec => <Recepies key={id} rec={rec}></Recepies>)
                    }
                </div>

            </div>

        </div>
    );
};

export default SingleChef;