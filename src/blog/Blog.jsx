import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Blog = () => {

    return (
        <div className='row mt-4'>
            <div className='col-6 border border-info p-2 '>
                <p className='fw-bold'>Different between controlled and uncontrolled components : </p>
                <p>In controlled components, we manage it's state using react state management where as in uncontrolled componenet, we don't controll state using react state management rather it is controlled by dom.</p>
            </div>
            <div className='col-6 border border-info p-2 '>
                <p className='fw-bold'>How to validate React props using PropTypes</p>
                <p>First we have to install npm install prop-types. Then we have to import it. After that we have to validate as follows. For example, if we have a component named PersonalDetails and we want to validate name and age then we can validate like this PersonalDetails.propTypes = name : PropTypes.string.isrequired, age : PropTypes.numbers; </p>
            </div>
            <div className='col-6 border border-info p-2 '>
                <p className='fw-bold'>Different between node.js and express.js</p>
                <p>Node.js is a runtime environment to run javascript code and express.js is a framework of nodejs.</p>
            </div>
            <div className='col-6 border border-info p-2 '>
                <p className='fw-bold'>What is a custom hook, and why will i create a custom hook?</p>
                <p>A custom hook is a reuseable JavaScript function. I will use it to make my code more clean and easy to undustandable.</p>
            </div>
            <div className='col-6 vh-100'>

            </div>
            <div className='col-6 vh-100'>

            </div>
        </div>
    );
};

export default Blog;