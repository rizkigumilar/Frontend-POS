import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from './Checkout';
import { getCart, plus, minus } from '../publics/redux/action/buy';

class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: this.props.cart,
            total: 0,
            jumlah: 0
        }
    }
    componentDidMount = async () => {
        await this.getAll()
    }
    getAll = () => {
        this.props.dispatch(getCart())
    }
    updateItem = (harga) => {
        const input = this.refs.myInput;
        console.log(input)
        let price = harga * input.value
        let result = this.state.total + price
        this.setState({ total: result })
        console.log('total', this.state.total)
    }
    plus = (item) => {
        console.log(item.qty)
        this.props.dispatch(plus(item.idItem, item.qty))
            .then(() => this.getAll())
    }
    minus = (item) => {
        this.props.dispatch(minus(item.idItem, item.qty))
            .then(() => this.getAll())
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
                                    {item.qty === 1 ?
                                        <input type="button" value="-" style={{ backgroundColor: '#82DE3A' }} onClick={() => this.minus(item)} disabled /> :
                                        <input type="button" value="-" style={{ backgroundColor: '#82DE3A' }} onClick={() => this.minus(item)} />
                                    }
                                    <input style={{ width: "30px" }} className="text-center" value={item.qty} type="text" />
                                    <input type="button" value="+" style={{ backgroundColor: '#82DE3A' }} onClick={() => this.plus(item)} />
                                </div>
                                <div style={{ float: 'right', margin: '-30px 30px 0px 0px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Rp. {(item.price) * (item.qty)}</span>
                                </div>
                            </div>
                        )
                    }
                    )
                }
                {this.props.cart.length === 0 ?
                    "" :
                    <div>
                        <div style={{ marginTop: '200px' }}>
                            <b>Total : </b>
                            <p style={{ fontSize: '12px' }}>*Belum Termasuk Ppn</p>
                        </div>
                        <div style={{ float: 'right', margin: '-60px 30px' }}>
                            <b>Rp. {this.props.total}*</b>
                        </div>
                        <Checkout />
                        <button style={{ width: '360px', height: '50px', backgroundColor: '#F24F8A' }}>
                            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>Cancel</p>
                        </button>
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cartList,
        total: state.cart.total
    }
}

export default connect(mapStateToProps)(CartItem);