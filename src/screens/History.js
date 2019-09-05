import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import {
    Modal,
} from 'reactstrap';
import { getTransaksi } from '../publics/redux/action/buy';
import moment from "moment";

class Add extends Component {
    state = {
        buy: [],
    }
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
    }
    componentDidMount = async () => {
        await this.props.dispatch(getTransaksi());
        this.setState({
            buy: this.props.buy,
        });
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggleDrop() {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { buy } = this.state
        const list = buy
        console.log('buy', list);
        return (
            <div>
                <a onClick={this.toggle}>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/clipboard-344-412910.png" style={{ height: '45px', width: '45px', float: 'left', marginLeft: '20px', marginTop: '50px' }} />
                </a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <div>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                        <MaterialTable
                            columns={[
                                { title: 'Receipt', field: 'Receipt' },
                                { title: 'Total Belanja', field: 'TotalBelanja' },
                                { title: 'TanggalBeli', field: 'TanggalBeli' },

                            ]}
                            data={list &&
                                list.length > 0 &&
                                list.map((item, index) => {
                                    const Buy = moment(item.TanggalBeli).format('dddd,  MMMM Do YYYY');

                                    return (
                                        { Receipt: `#${item.idReceipt}`, TanggalBeli: Buy, TotalBelanja: `Rp. ${item.HargaTotal}` }
                                    )
                                })
                            }
                            title="History List"
                        />
                    </div>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        buy: state.cart.buyList,
    };
};
export default connect(mapStateToProps)(Add);