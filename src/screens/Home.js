import React, { Component } from 'react';
import '../assets/navbar.css';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import SideBar from '../components/SideBar';
import CartItem from '../components/CartItem';
import ListItem from '../components/ListItem';


class Home extends Component {
    state = {
        tmp: ''
    }

    test = () => {
        this.setState({ tmp: {} })
        this.setState({ tmp: [] })
    }
    render() {
        return (
            <div >
                <div style={{ float: 'left', width: '73%', height: '80px', boxShadow: '2px 1px 7px #999' }}>
                    <Navbar />
                    <SideBar />
                </div>
                <div style={{ float: 'left', width: '27%', height: '80px', boxShadow: '2px 1px 7px #999' }}>
                    <Cart  />
                    <CartItem tmp={this.state.tmp}/>
                </div>
                <div>
                    <ListItem test={this.test} />
                </div>
            </div>
        );
    }
}

export default Home;