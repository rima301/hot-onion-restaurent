import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Items from '../Items/Items';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import './FoodDetails.css';
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import ButtonGroup from 'react-bootstrap/ButtonGroup';





const FoodDetails = (props) => {
     const {itemId} = useParams();
     const food = fakeData.find(idValue => idValue.id == itemId);
     
     
     console.log(food)
   
    return (
        <div >

            
            <Row className="details-container">
                
                
                <Col xs lg="6">
                    <div className="food-container"  >
                        <h1>{food.name}</h1>
                        <p> <small>{food.description}</small> </p>
                        <div className="flex-container">
                            <div className="margin-container"><h3>${food.price}</h3> </div>
                            
                            <button className="text-center" id="plus-btn"> + </button>
                            <input type="text sm"/>
                            <button id="minus-btn aria-label"> - </button>

                        </div>
                        <div >
                            <button className="btn-container" onClick={props.handleAddItem}> <FontAwesomeIcon icon={faCartArrowDown}/> Add </button>
                        </div>
                        
                    </div>
                </Col>
                
                <Col xs lg="6">s
                    <div className="img-container">
                        <img src={food.imageUrl} alt=""/>
                    </div>
                
                </Col>
                
            </Row> 

            

           
            
            
        </div>
    );
};

export default FoodDetails;