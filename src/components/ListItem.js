import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/listitem.css';
import { Link } from 'react-router-dom';

import { getitem } from '../publics/redux/action/item';
import { getCart, postCart, deleteCart } from '../publics/redux/action/buy';




class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            cart: []
        };
    }
    componentDidMount = async () => {
        await this.props.dispatch(getitem());
        this.setState({
            items: this.props.item.itemList
        })
        await this.props.dispatch(getCart())
    };
    check = (data) => {
        let index = this.state.cart.indexOf(data)
        if (index === -1) {
            this.state.cart.push(data)
            let result = {
                idItem: data.idItem,
                qty: 1
            }
            this.props.dispatch(postCart(result))
                .then(() => {
                    this.props.dispatch(getCart())
                        .then(() => {
                            this.props.test()
                        })
                })
        }
        else {
            this.state.cart.splice(index, 1)
            this.props.dispatch(deleteCart(data.idItem))
                .then(() => {
                    this.props.dispatch(getCart())
                        .then(() => {
                            this.props.test()
                        })
                })
        }
        this.setState({ cart: this.state.cart })
        console.log(this.state.cart)
    }


    render() {
        // const list = this.state.items
        // console.log(list);
        return (
            <div>
                {localStorage.name != null ?
                    <div className="list-item">
                        <ul>
                            {this.props.item.map((item) => {
                                return (
                                    <div className="item" onClick={() => this.check(item)}>
                                        {this.state.cart.indexOf(item) === -1 ?
                                            <>
                                                <img className="gambar1" src={item.image} alt="gambar" />
                                                <div>
                                                    <p>{(item.name)}</p>
                                                    <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Rp. {(item.price)}</p>
                                                </div>
                                            </> :
                                            <>
                                                <img className="check" src='https://image.flaticon.com/icons/png/512/14/14946.png' alt="gambar" />
                                                <img className="gambar2" src={item.image} alt="gambar" />
                                                <div>
                                                    <p>{(item.name)}</p>
                                                    <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Rp. {(item.price)}</p>
                                                </div>
                                            </>
                                        }
                                    </div>
                                )
                            }
                            )
                            }
                        </ul>
                    </div> :
                    <div style={{ marginLeft: '300px', }}>
                        <img src='https://cdn3.iconfinder.com/data/icons/basicolor-signs-warnings/24/182_warning_notice_error-512.png' />
                        <div style={{ marginLeft: '100px' }}>
                            <span style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>Please Login First !!!</span>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.item.itemList,
        cart: state.item.cartList
    };
};

export default connect(mapStateToProps)(Item);