import React from 'react';
import bg from '../../Image/bannerbackground.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-middle">
            <h2>Best food waiting for your belly</h2>
            <input type="text" placeholder="Search food items" />
            <button>Search</button>
            </div>
            
        </div>
    );
};

export default Banner;