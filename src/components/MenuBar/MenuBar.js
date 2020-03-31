import React from 'react';

import './MenuBar.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';



const MenuBar = () => {
    return (
        <div className="header">
            <Row >
                
                <Col xs lg="1"><a href="/breakfast">Breakfast</a></Col>
                <Col xs lg="1"><a href="/lunch">Lunch</a></Col>
                <Col xs lg="1"><a href="/dinner">Dinner</a></Col>
            </Row>    
        </div>
    );
};

export default MenuBar;
