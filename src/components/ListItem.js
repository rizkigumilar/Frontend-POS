import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/listitem.css';
import { Link } from 'react-router-dom';

import { getitem } from '../publics/redux/action/item';



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
        });
    };
    check = (data) => {
        let index = this.state.cart.indexOf(data)
        if (index === -1) {
            this.state.cart.push(data)
        }
        else {
            this.state.cart.splice(index, 1)
        }
        this.setState({ cart: this.state.cart })
        this.props.dispatch({ type: 'ADD_CART', newValue: this.state.cart })
        this.props.test()
        console.log(this.state.cart)
    }


    render() {
        // const list = this.state.items
        // console.log(list);
        return (
            <div>
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.item.itemList,
    };
};

export default connect(mapStateToProps)(Item);