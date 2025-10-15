import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brather = () => {

    const [money, setMoney] = use(MoneyContext)

    return (
        <div>
            <h3>Brather</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Brather;