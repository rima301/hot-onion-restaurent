import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../Image/adult-blur-blurred-background-687824.png';

const Service = () => {
    return (
        <div>
            <div >
            <h1 className="service-heading">Why you choose us</h1>
            <p>Barton waited twenty always repair in within we do. An delighted offering curiousity my is dashwoods at. Boy prosperous increasing surrounded. </p>
            </div>
            <div className="service-info" >
                <Row>
                    <Col>
                    <img src={img1} alt=""/> 
                    <h4>Fast Delivery</h4>
                    <p>Keep your system in sync with automated we hook based notifications each time link is paid and how we dream about our future.</p>
                    </Col>
                    <Col>
                    <img src={img1} alt=""/> 
                    <h4>Fast Delivery</h4>
                    <p></p>
                    </Col>
                    <Col><img src={img1} alt=""/> 
                    <h4>Fast Delivery</h4>
                    <p></p>
                    </Col>
                </Row>
            </div>
                
            
            
        </div>
        
    );
};

export default Service;