import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert'
import {
    Modal,
} from 'reactstrap';
import { postTransaksi } from '../publics/redux/action/buy';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            cart: this.props.cart,
            total: Number(this.props.total + (this.props.total * 0.1)),
            jumlah: 0,
            dropdownOpen: false,
            idReceipt: Number(new Date().getMilliseconds() * new Date().getSeconds() * 23458),
            buy: []
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
    }

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
        const AddBuy = () => {
            this.state.buy.push({
                idReceipt: this.state.idReceipt,
                HargaTotal: this.state.total
            });
            add()
            this.setState((prevState) => ({
                modal: !prevState.modal
            }));
        };
        let add = async () => {
            await this.props.dispatch(postTransaksi(this.state.buy[0])).then(() => {
                swal({
                    title: "Succes",
                    text: "Buy Success !!",
                    icon: "success",
                    button: "OK"
                }).then(() => {
                    window.location.href = '/menu';
                })
            })
                .catch(() => {
                    swal({
                        title: "Failed",
                        text: "Buy Failed",
                        icon: "warning",
                        buttons: "OK"
                    }).then(() => {
                        window.location.href = '/menu';
                    })
                })
        };
        console.log('isi data ', this.props.cart)
        return (
            <div>
                <button onClick={this.toggle} style={{ width: '360px', height: '50px', backgroundColor: '#57CAD5' }}>
                    <p style={{ color: 'white', fontWeight: 'bold', fontSize: '25px' }}>Checkout</p>
                </button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="{this.props.className} modal-lg">
                    <b style={{ fontSize: '25px', marginLeft: '60px', marginTop: '20px' }}>Checkout</b>
                    <b style={{ marginLeft: '60px' }}>Cashier : {localStorage.name}</b>
                    <p style={{ marginLeft: '580px', marginTop: '-40px' }}>Receipt No : #{this.state.idReceipt}</p>
                    {this.props.cart.map((item) => {
                        return (
                            <div>
                                <div style={{ marginLeft: '60px', marginTop: '30px' }}>
                                    <b>{item.name} {item.qty}x</b>
                                </div>
                                <div style={{ float: 'right', marginRight: '60px', marginTop: '-30px' }}>
                                    <b>Rp. {(item.price) * (item.qty)}</b>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                    <div style={{ marginTop: '20px' }}>
                        <b style={{ marginLeft: '60px' }}>Ppn 10%</b>
                        <b style={{ float: 'right', marginRight: '60px' }}>Rp. {Number(this.props.total * 0.1)}</b>
                    </div>
                    <div >
                        <b style={{ marginTop: '20px', float: 'right', marginRight: '70px' }}>Total : Rp. {Number(this.props.total + (this.props.total * 0.1))}</b>
                    </div>
                    <div >
                        <b style={{ marginTop: '20px', marginLeft: '70px' }}>Payment : Cash</b>
                    </div>
                    <button onClick={AddBuy.bind(this)} style={{ color: 'white', fontWeight: "bold", width: '600px', height: '66px', marginTop: '100px', marginLeft: '115px', backgroundColor: '#F24F8A', borderRadius: '10px' }}>
                        PRINT
                    </button>
                    <b style={{ fontSize: '30px', marginLeft: '400px' }}>Or</b>
                    <button style={{ color: 'white', fontWeight: "bold", width: '600px', height: '66px', marginTop: '30px', backgroundColor: '#57CAD5', marginLeft: '115px', marginBottom: '20px', borderRadius: '10px', marginRight: '15px' }}>
                        SEND MAIL
                        </button>
                </Modal>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart.cartList,
        total: state.cart.total
    };
};
export default connect(mapStateToProps)(Add);