import React, { useEffect, useState } from 'react';
import Chef from './chef/Chef';

const Body = () => {
    // declare a state to get all the chefs from server
    const [chefs, setChefs] = useState([]);

    // declare a state to check whether a button is clicked or not
    const [btnClick, setBtnClick] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    const checkBtnClick = () => {
        setBtnClick(true);
    }

    return (
        <div className='row mt-4 '>
            <div className='col-8'>
                <div className='row'>
                    {
                        btnClick
                            ?
                            chefs.map(c => <Chef key={c.id} chef={c}></Chef>)
                            :
                            chefs.slice(0, 6).map(c => <Chef key={c.id} chef={c}></Chef>)
                    }
                    <div className='d-flex justify-content-center'>
                        <button onClick={() => checkBtnClick()} type="button" className="btn btn-primary">Show More</button>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <p className='text-center fw-bolder fs-3'>Upcoming chef event</p>
                <div className='card p-4 mb-4'>
                    <p className='fw-bold fs-2'>Sydny event</p>
                    <img className='image' src="Sydny.jpg" alt="no image available" />
                    <p className='mt-2'>"Indulge in a culinary masterpiece at the heart of Sydney! Join us for a Chef Extravaganza showcasing the city's top culinary talents. Immerse your taste buds in an exquisite fusion of flavors, as renowned chefs whip up gastronomic delights. From delectable appetizers to mouthwatering desserts, this event promises an unforgettable culinary journey. Discover the artistry of food, all under one roof. Don't miss the chance to savor Sydney's finest cuisine, where every bite is a symphony of flavors. Join us for a celebration of food and creativity that will leave you craving for more!"</p>

                </div>
                <div className='card p-4 mb-4'>
                    <p className='fw-bold fs-2'>NewYork event</p>
                    <img className='image' src="NewYork.jpg" alt="no image available" />
                    <p className='mt-2'>
                        "New York's culinary scene takes center stage at our Chef Extravaganza! Join us for a gastronomic adventure where top chefs from the city present their finest creations. Taste your way through a diverse array of dishes, from innovative appetizers to sumptuous main courses and divine desserts. Experience the magic of culinary artistry, all in one place. This event promises to tantalize your taste buds, offering a memorable exploration of the city's food culture. Don't miss out on this opportunity to savor the flavors of New York, where every bite is a delicious tribute to the city that never sleeps."
                    </p>

                </div>
                <div className='card p-4 mb-4'>
                    <p className='fw-bold fs-2'>London event</p>
                    <img className='image' src="London.jpg" alt="no image available" />
                    <p className='mt-2'>
                        "London's culinary elite gathers for a gastronomic celebration like no other at our Chef Showcase! Join us to experience the exquisite creations of renowned chefs from across the city. From delectable starters to mouthwatering mains and delightful desserts, this event is a feast for all the senses. Immerse yourself in the diverse world of London's culinary artistry, all under one roof. Indulge in a symphony of flavors that pays homage to the rich food heritage of this global metropolis. Don't miss this opportunity to savor the best of London's culinary delights; it's an epicurean journey you won't want to miss."
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Body;