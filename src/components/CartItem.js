import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartItem extends Component {

    render() {
        return (
            <div style={{ position: 'absolute', width: '370px', height: '1224px', float: 'right', top: '82px', background: 'white', border: '1px solid #CECECE' }}>
                <img src={require('../assets/image/food-and-restaurant.png')} style={{ marginLeft: '70px' }} />
                <div>
                    <span style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '70px', marginBottom: '50px' }}>Your cart is empty</span>
                    <br />
                    <span style={{ fontSize: '20px', color: '#CECECE', marginLeft: '30px' }}>please add some items from menu</span>
                </div>
            </div>
        );
    }
}

export default CartItem;