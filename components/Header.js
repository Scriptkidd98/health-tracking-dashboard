import React from 'react';
import {Link} from 'react-router-dom';
import person from './Images/pana.png';
import notification from './Images/notification.png';
import './myStyles.css';

function Header() {
    return(
        <div className='header sticky'>
            <div className='header-inner'>
                <Link to='/' className='header-link'>Dashboard</Link>
                <img src={notification} alt="Notification Icon" className='header-notification'></img>
                <img src={person} alt="User" className='header-image'></img>
            </div>
        </div>
    );
}
export default Header;