import React from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    
    const cart = props.cart;
    const courseTotal = cart.reduce((total, course) => total + course.price,0);
    const tax = courseTotal/10;
    
    return (
        <div className="cart-container">
            <h3>Order Summary </h3>
            <h5> Items Ordered: {cart.length}</h5>
            <h6>Course Price: {courseTotal}</h6>
            <h6>Tax: {tax}</h6>
            <h6>Total Price: {courseTotal + tax}</h6>
            <Button variant="success">Place Order</Button>
        </div>
    );
};

export default Cart;