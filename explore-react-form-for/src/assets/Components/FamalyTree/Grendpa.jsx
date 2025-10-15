import React from 'react';
import Dade from './Dade';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grendpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dade asset={asset}></Dade>
                <Uncle></Uncle>
                <Aunt asset={asset}></Aunt>
            </section>
        </div>
    );
};

export default Grendpa;