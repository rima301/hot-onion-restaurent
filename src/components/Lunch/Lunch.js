import React, { useState } from 'react';
import fakeData from '../../fakeData/itemDetails';
import Items from '../Items/Items'

const Lunch = () => {
    const [items, setitems] = useState(fakeData);
    const lunch = items.filter(item => item.category === "lunch")
    return (
        <div className="row">
            {
                    lunch.map( item => (<div className="col-md-4">
                        <Items item={item}></Items>
                    </div>))
            }
        </div>
    );
};

export default Lunch;