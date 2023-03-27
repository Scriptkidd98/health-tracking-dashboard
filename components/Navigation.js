import React from 'react';
import './myStyles.css';
import 'bootstraps/dist/css/bootstrap.css';
import waiting from './Images/waiting.png';
import dashboard from './Images/dashboard.png';
import schedule from './Images/schedule.png';
import patients from './Images/patients.png';
import notes from './Images/notes.png';
import chats from './Images/chats.png';
import logo from './Images/logo.png';
import {Col} from 'react-bootstrap';
import settings from './Images/settings.png';
import {NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import person from './Images/person.png';


function Navigation() {
    return(
        <Col xs={12} md={3} lg={2} className="dashboard-navigation sticky-nav">
                        <div className=''></div>
                        <div className='logo-div'><img src={logo} alt="Logo"></img><span className='logo-text'>Health Lite</span></div>
                        <div className='navigation-links'>
                            <Nav.Link as={NavLink} to='/' className='side-nav-link' end>
                                <div className='navigation-link'>
                                    <div className='navigation-link-inner'>
                                        <img src={dashboard} alt="User" className='nav-image'></img><span>Dashboard</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/Waiting' className='side-nav-link' end>
                                <div className='navigation-link'>
                                    <div className='navigation-link-inner'>
                                        <img src={waiting} alt="User" className='nav-image'></img><span>Waiting Room</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/Schedule' className='side-nav-link' end>
                                <div className='navigation-link'>
                                    <div className='navigation-link-inner'>
                                        <img src={schedule} alt="User" className='nav-image'></img><span>Schedule</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/MyPatients' className='side-nav-link' end>
                                <div className='navigation-link'>
                                    <div className='navigation-link-inner'>
                                        <img src={patients} alt="User" className='nav-image'></img><span>My Patients</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/Notes' className='side-nav-link' end>
                                <div className='navigation-link'>
                                    <div className='navigation-link-inner'>
                                        <img src={notes} alt="User" className='nav-image'></img><span>Notes</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/Chats' className='side-nav-link' end>
                                <div className='navigation-link'>
                                    <div className='navigation-link-inner'>
                                        <img src={chats} alt="User" className='nav-image'></img><span>Chats</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/MyProfile' className='side-nav-link' end>
                                <div className='navigation-link navigation-link-div'>
                                    <div className='navigation-link-inner '>
                                        <img src={person} alt="User" className='nav-image-profile'></img><span>My Profile</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/Settings' className='side-nav-link' end>
                                <div className='navigation-link'>
                                    <div className='navigation-link-inner'>
                                        <img src={settings} alt="User" className='nav-image'></img><span>Settings</span>
                                    </div>
                                </div>
                            </Nav.Link>
                        </div>
                    </Col>
    );
}
export default Navigation;