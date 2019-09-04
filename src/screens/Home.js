import React, { Component } from 'react';
import '../assets/navbar.css';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import SideBar from '../components/SideBar';
import CartItem from '../components/CartItem';
import ListItem from '../components/ListItem';


class Home extends Component {

    render() {
        return (
            <div >
                <div style={{ float: 'left', width: '73%', height: '80px', boxShadow: '2px 1px 7px #999' }}>
                    <Navbar />
                    <SideBar />
                </div>
                <div style={{ float: 'left', width: '27%', height: '80px', boxShadow: '2px 1px 7px #999' }}>
                    <Cart />
                    <CartItem />
                </div>
                <div>
                    <ListItem />
                </div>
            </div>
        );
    }
}

export default Home;