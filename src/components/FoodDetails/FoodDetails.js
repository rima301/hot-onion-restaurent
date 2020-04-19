
import React,  { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import './FoodDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

 const handleAddItem = () => {
    const product = fakeData[0];
     console.log('before post',fakeData[0]);
     
     fetch("http://localhost:3007/addProductNew", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify(fakeData), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
// Converting to JSON 
.then(res => res.json()) 
  
// Displaying results to console 
.then(data => console.log('POST method successfully done',data)); 
 
  }
const FoodDetails = () => {
     const {itemId} = useParams();
     const food = fakeData.find(idValue => idValue.id == itemId);
     const [ value, setValue ] = useState(0);
     
     //console.log(props);

   
    return (
        <div>

            <Row className="details-container">
               <Col xs lg="6">
                    <div className="food-container">
                         <h1>{food.name}</h1> 
                        <p> <small>{food.description}</small> </p>
                        <div className="flex-container">
                            <div className="margin-container"><h3>${food.price}</h3> </div>
                            
                            <button id="plus-btn" onClick={() => setValue(value + 1)}> + </button>
                            <input type="text sm" value={ value } />
                            <button id="minus-btn" onClick={() => setValue(value - 1)}> - </button>

                        </div>
                         <div >
                            <button className="btn-container" onClick ={ handleAddItem}> <FontAwesomeIcon icon={faCartArrowDown}/> Add </button>
                        </div>
                         
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