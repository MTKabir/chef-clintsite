import React from 'react';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { AiFillHeart } from "react-icons/ai";


const Recepies = ({ rec }) => {
    const { recipeName, ingredients, cookingMethod, rating } = rec;
    return (
        <div className='col-4 card p-2'>
            <p>Recipe Name : {recipeName}</p>
            <p>Ingredients :</p>
            {ingredients.map((ingredient) =>
                <li className='list-unstyled'>
                <BiSolidCheckCircle /> {ingredient}
            </li>
            )}
            <p></p>
            <p>Cooking method : {cookingMethod}</p>
            <p >Rating : {rating}</p>
            <AiFillHeart className='text-danger'></AiFillHeart>
        </div>
    );
};

export default Recepies;