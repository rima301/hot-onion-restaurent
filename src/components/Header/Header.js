import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import logo from '../../Image/logo2.png';
import cart from '../../Image/shopping-cart.svg'
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <Row>
                <Col><img alt="" src={logo}/></Col>
                <Col xs lg="1"><a href="/cart">cart</a></Col>
                <Col xs lg="1"><a href="/login">Login</a></Col>
                <Col xs lg="1"><button>Sign up</button></Col>
            </Row>    
        </div>
    );
};

export default Header;