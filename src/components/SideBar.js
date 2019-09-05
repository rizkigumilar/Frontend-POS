import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Add from './Add';
import History from '../screens/History'

class SideBar extends Component {

    render() {
        return (
            <div style={{ position: 'absolute', width: '99px', height: '1500px', left: '0px', top: '82px', background: 'white', boxShadow: '2px 1px 7px #999' }}>
                {localStorage.name != null ?
                    <div>
                        <img src="https://www.kjppack.com/wp-content/uploads/2018/10/sendok-dan-garpu.png" style={{ height: '45px', width: '45px', float: 'left', marginLeft: '20px', marginTop: '30px' }} />
                        <History />
                        <Add />
                        <Link to="/menu/logout"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYnP5ivADkf4M5mj2RJVAu98BIG4JPa8_wVdsR0ktc2Cykwip' style={{ height: '45px', width: '45px', float: 'left', marginLeft: '20px', marginTop: '50px' }} /></Link>
                    </div> :
                    ('')
                }
            </div>
        );
    }
}

export default SideBar;