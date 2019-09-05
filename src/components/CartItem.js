import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from './Checkout';

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
            <div style={{ position: 'absolute', width: '364px', height: '900px', float: 'right', top: '82px', background: 'white', border: '1px solid #CECECE' }}>
                {this.props.cart.length === 0 ?
                    <center>
                        <img src={require('../assets/image/food-and-restaurant.png')} alt="gambar" style={{ marginLeft: '70px' }} />
                        <div>
                            <p style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '70px', marginBottom: '20px' }}>Your cart is empty</p>
                            <br />
                            <p style={{ fontSize: '20px', color: '#CECECE', marginLeft: '20px' }}>please add some items from menu</p>
                        </div>
                    </center> :
                    (
                        this.props.cart.map((item) => {
                            return (
                                <div>
                                    <div>
                                        <img style={{ height: '100px', width: "100px", marginLeft: '20px', marginTop: '30px', borderRadius: '5px' }} src={item.image} alt="gambar" />
                                    </div>
                                    <div style={{ margin: '-100px 0px 60px 140px' }}>
                                        <span style={{ fontSize: '25px', fontWeight: 'bold' }}>{(item.name)}</span>
                                    </div>
                                    <div style={{ margin: '-30px 0px 0px 140px' }}>
                                        <input type="button" value="-" style={{ backgroundColor: '#82DE3A' }} />
                                        <input style={{ width: "30px" }} className="text-center" value={1} type="text" />
                                        <input type="button" value="+" style={{ backgroundColor: '#82DE3A' }} />
                                    </div>
                                    <div style={{ float: 'right', margin: '-30px 30px 0px 0px' }}>
                                        <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Rp. {(item.price)}</span>
                                    </div>

                                </div>
                            )
                        }
                        )
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