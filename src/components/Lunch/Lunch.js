import React, { useState } from 'react';
import Items from '../Items/Items';
import fakeData from '../../fakeData'


const Lunch = () => {
    const [items, setitems] =  useState(fakeData);
    const breakfast = items.filter(item => item.category === "lunch");
    
   const handleAddItem = () => {
           console.log("item added")

      }
    return (
        <div className="row">
            
        
        {
            breakfast.map( item => (<div className="col-md-4">
            <Items 
                 handleAddItem = {handleAddItem}
                item={item}>
            </Items></div>))
        }
        </div>
    );
};

export default Lunch;