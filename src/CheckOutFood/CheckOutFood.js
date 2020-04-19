import React from 'react';
import './CheckOutFood.css'
import Cart from '../Cart/Cart';

const CheckOutFood = () => {

    function callCart(){
       alert('call Cart')
    
    }
    return (
        
        <div >
            <button className="check-btn " onClick={callCart}> Check Out Food</button>
        </div>
       
    );
};

export default CheckOutFood;