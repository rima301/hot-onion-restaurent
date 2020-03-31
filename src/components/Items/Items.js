import React from 'react';
import './Items.css'
import { Link } from 'react-router-dom';

const Items = (props) => {
    const {name, imageUrl,title,price,id } = props.item;
    return (
        <div className="item-info">
            <div>
                <img src={imageUrl} alt=""/>
            </div>
            
            <div>
                <h4><Link to = {"/" + id}>{name}</Link> </h4>
                <br/>
                <p><small>{title}</small></p>
                <br/>
                <h2>${price}</h2>
            </div>
           
        </div>
        
    );
};

export default Items;