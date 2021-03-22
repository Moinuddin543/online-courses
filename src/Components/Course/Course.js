import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Course = (props) => {
    const {name, instructor, price, image} = props.course;
    
    return (
        <div className="course">
            <div>
               <img src={image} alt=""/>
            </div>
            <div>
                <h3>Course Title: {name}</h3>
                <br/>
                <h6> Created by: {instructor}</h6>
                <br/>
                <h5>Price: {price} Taka</h5>
                <br/>
                <Button className="main-button" variant="warning" onClick={()=> props.handleClickButton(props.course)}><FontAwesomeIcon icon={ faShoppingCart} />Enroll Now</Button>
            </div>
            
        </div>
    );
};

export default Course;