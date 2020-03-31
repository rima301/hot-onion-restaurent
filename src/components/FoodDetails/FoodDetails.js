import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Items from '../Items/Items';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';




const FoodDetails = () => {
     const {itemId} = useParams();
     const food = fakeData.find(idValue => idValue.id == itemId);
     
     
     console.log(food)
   
    return (
        <div className="details-container">

            
            <Row>
                
                
                <Col xs lg="6">
                    <div className="food-container"  >
                        <h1>{food.name}</h1>
                        <p> <small>{food.description}</small> </p>
                        <h3>${food.price}</h3>
                        <button>btn1</button>
                        <br/>
                        <button>btn2</button>
                    </div>
                </Col>
                
                <Col xs lg="6">
                    <div className="img-container">
                        <img src={food.imageUrl} alt=""/>
                    </div>
                
                </Col>
                
            </Row> 

            

           
            
            
        </div>
    );
};

export default FoodDetails;