import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div>
                    <h1>Oops!404 not found</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <img src="/404.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;