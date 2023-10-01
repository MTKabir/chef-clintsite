import React from 'react';

const Banner = () => {
    return (
        <div>
            <img
                className="w-100 d-block d-xl-none" // Applies to all devices except extra-large (xl)
                src="./banner.jpg"
                alt="First slide"
            />
            <img
                className="w-100 d-none d-xl-block" // Applies only to extra-large (xl) devices
                style={{ height: '100vh' }} // Set the height to 60% of viewport height
                src="./banner.jpg"
                alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
                <h1 className=''>Welcome to our website</h1>
                <p className='text-white'>Let's find your best chef here</p>
            </div>
        </div>
    );
};

export default Banner;