import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Navbar extends Component {

    render() {
        return (
            <div>
                <div style={{ paddingTop: '20px', textAlign: 'center' }}>
                    <img src="https://cdn3.iconfinder.com/data/icons/mobile-banking-ver-4a/100/1-48-512.png" style={{ height: '55px', width: '55px', float: 'left', marginLeft: '20px' }} />
                    <span style={{ color: 'black', fontSize: '30px', fontWeight: 'normal' }}>Food Items</span>
                    {localStorage.name != null ?
                        <img src='https://image.flaticon.com/icons/png/512/55/55369.png' style={{ height: '30px', width: '30px', float: 'right', marginRight: '20px', marginTop: '10px' }} /> :
                        <Link to="/menu/login"><span style={{ color: 'black', fontSize: '30px', fontWeight: 'normal', float: 'right', marginRight: '10px' }}>Login</span></Link>
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;