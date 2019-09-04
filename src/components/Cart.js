import React, { Component } from 'react';
import '../assets/navbar.css';



class Cart extends Component {

    render() {
        return (
            <div >
                <div style={{ paddingTop: '20px', textAlign: 'center' }}>
                    <span style={{ color: 'black', fontSize: '30px', fontWeight: 'normal' }}>Cart</span>
                </div>
            </div>
        );
    }
}

export default Cart;