import React, { useState } from 'react';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillHeart } from "react-icons/ai";


const Recepies = ({ rec }) => {
    const { recipeName, ingredients, cookingMethod, rating } = rec;
    const [btnClick, setBtnClick] = useState(false);
    const notify = () => {
        toast.success('🦄 Recipie is your favourite', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setBtnClick(true);
    };

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
            <div>
                {
                    btnClick ?
                    <button className='border-0 bg-white ' disabled><AiFillHeart className='text-danger'></AiFillHeart></button>
                    :
                    <button className='border-0 bg-white ' onClick={notify}><AiFillHeart className='text-danger'></AiFillHeart></button>

                }
                <ToastContainer />
            </div>

        </div>
    );
};

export default Recepies;