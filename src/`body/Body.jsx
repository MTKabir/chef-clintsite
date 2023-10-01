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

    const checkBtnClick = () =>{
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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, illo ullam nostrum soluta nulla voluptate amet repellendus numquam, iure id repellat incidunt atque debitis architecto labore magnam. Eligendi, possimus? Atque?</p>
            </div>
        </div>
    );
};

export default Body;