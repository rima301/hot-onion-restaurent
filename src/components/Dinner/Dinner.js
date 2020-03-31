import React, { useState } from 'react';
import Items from '../Items/Items'
import fakeData from '../../fakeData'

const Dinner = () => {
    const [items, setitems] = useState(fakeData);
    const dinner = items.filter(item => item.category === "dinner");
    return (
        <div>
            <div className="row">
                {
                    dinner.map( item => (<div className="col-md-4">
                        <Items item={item}></Items>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Dinner;