import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { getTransaksi } from '../publics/redux/action/buy';
import { connect } from 'react-redux';
import moment from "moment";

class History extends Component {
    state = {
        buy: [],
    };
    componentDidMount = async () => {
        await this.props.dispatch(getTransaksi());
        this.setState({
            buy: this.props.buy,
        });
    };

    render() {
        const { buy } = this.state;
        const list = buy
        console.log(list);
        return (
            <div style={{ maxWidth: '100%' }}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <MaterialTable
                    columns={[
                        { title: 'Receipt', field: 'idReceipt' },
                        { title: 'TotalBelanja', field: 'HargaTotal' },
                        { title: 'TanggalBeli', field: 'TanggalBeli' },

                    ]}
                    data={list &&
                        list.length > 0 &&
                        list.map((item, index) => {
                            const Buy = moment(item.TanggalBeli).format("DD-MM-YYYY");

                            return (
                                { Receipt: item.idReceipt, TanggalBeli: Buy, TotalBelanja: item.HargaTotal }
                            )
                        })
                    }
                    title="History List"
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        buy: state.buy,
    };
};

export default connect(mapStateToProps)(History);