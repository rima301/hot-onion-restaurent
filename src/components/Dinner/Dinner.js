import React, { useState } from 'react';
import Items from '../Items/Items'
import { useEffect } from 'react';

const Dinner = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3010/addProductNew')
        .then(res => res.json())
        .then(data => {
            setitems(data);
        } )
    },[])
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