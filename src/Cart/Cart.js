import React from 'react'
import './Cart.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'




const Cart =() => {
    
    const [cart,setCart]= useState([]);
    
    


    return (

        <div className="placeOrder-container">
             <Row className="">
                <Col xs lg="6">
                    <div className="deliveryDetails">
                        
                        <Form>
                            <Col>
                                <Row>
                                <h3 className="edit-delivery">Edit Delivery Details</h3>
                                </Row>
                                <Row>
                                    <Form.Control placeholder="First name" />
                                </Row> <br/>
                                <Row>
                                    <Form.Control placeholder="Last name" />
                                </Row> <br/>
                                <Row>
                                    <Form.Control placeholder="Last name" />
                                </Row> <br/>
                                <Row>
                                    <Form.Control placeholder="Last name" />
                                </Row> <br/>
                            </Col>
                        </Form>
                        
                        <button className="button-save">Save & Continue</button>
                    </div>
             </Col>

             <Col xs lg="6">
                <div className="cart-container">
                    <h4>From Gulshan Plaza Restaura GPR </h4> 
                    <h5>Arriving in 20-30 min</h5>
                    <h5>107 Rd No 8</h5>
    <h4>Order Summery:{cart.length}</h4>

                </div>
             </Col>

             </Row>
        
        </div>
  
    );
};

export default Cart;

