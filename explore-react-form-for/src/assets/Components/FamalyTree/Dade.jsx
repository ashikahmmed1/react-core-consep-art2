import React from 'react';
import Myself from './Myself';
import Brather from './Brather';
import Sister from './Sister';

const Dade = ({asset}) => {
    return (
        <div>
            <h4>Dad</h4>
            <section className='flex'>
                <Myself asset={asset}></Myself>
                <Brather></Brather>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dade;