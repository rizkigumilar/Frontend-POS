import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: this.props.cart
        }
    }

    render() {
        console.log(this.props.cart)
        return (
            <div style={{ position: 'absolute', width: '370px', height: '1224px', float: 'right', top: '82px', background: 'white', border: '1px solid #CECECE' }}>
                {this.props.cart.length === 0 ?
                    <center>
                        <img src={require('../assets/image/food-and-restaurant.png')} alt="gambar" style={{ marginLeft: '70px' }} />
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '70px', marginBottom: '50px' }}>Your cart is empty</p>
                            <br />
                            <p style={{ fontSize: '20px', color: '#CECECE', marginLeft: '30px' }}>please add some items from menu</p>
                        </div>
                    </center> :
                    this.props.cart.map((item) => {
                        return (
                            <div>
                                <div>
                                    <img style={{ height: '100px', width: "100px", marginLeft: '20px', marginTop: '30px', borderRadius: '5px' }} src={item.image} alt="gambar" />
                                    <span style={{ fontSize: '25px', bottom: '60px' }}>{(item.name)}</span>
                                </div>
                                <div>
                                    <span>Rp. {(item.price)}</span>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.item.cartList
    }
}

export default connect(mapStateToProps)(CartItem);