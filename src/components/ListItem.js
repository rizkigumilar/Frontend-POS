import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/listitem.css';
import { Link } from 'react-router-dom';

import { getitem } from '../publics/redux/action/item';



class Item extends Component {
    state = {
        items: []
    };
    componentDidMount = async () => {
        await this.props.dispatch(getitem());
        this.setState({
            items: this.props.item.itemList
        });
    };


    render() {
        const list = this.state.items
        console.log(list);
        return (
            <div>
                {localStorage.name != null ?
                    <div className="list-item">
                        <ul>
                            {list &&
                                list.length > 0 &&
                                list.map((item, index) => {
                                    return (
                                        <div className="item" id="items" bookid={item.idItem}>
                                            <img src={item.image} alt="gambar" />
                                            <div>
                                                <p>{(item.name)}</p>
                                                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>Rp. {(item.price)}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </ul>
                    </div> :
                    <div>
                        <img src='https://img.pngio.com/error-png-91-images-in-collection-page-2-errors-png-600_500.png' style={{ height: '75px', width: '75px' }} />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        item: state.item,
    };
};

export default connect(mapStateToProps)(Item);