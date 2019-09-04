import React, { Component } from 'react';
import { connect } from 'react-redux';
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