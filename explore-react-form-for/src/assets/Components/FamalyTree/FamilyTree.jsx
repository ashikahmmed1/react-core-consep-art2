import React, { createContext, useState } from 'react';
import Grendpa from './Grendpa';
import './FamilyTree.css'
 
export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamalyTree = () => {
    const [money, setMoney] = useState(0);

   const asset = 'diamond'; 
   const newAsset = 'gold';
 
    return (
        <div className='family-tree'>
             <h2>Family Tree</h2>
             <h4>Total Family Money; {money}</h4>
             <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                   <Grendpa asset={asset}></Grendpa>
                </AssetContext.Provider>
             </MoneyContext>
        </div>
    );
};

export default FamalyTree;