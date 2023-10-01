import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipies = () => {
    const {id} = useParams();
    const data = useLoaderData();
    console.log(data);


    return (
        <div>
            <p>{data.length}</p>
            
        </div>
    );
};

export default ChefRecipies;