import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstraps/dist/css/bootstrap.css';
import person from '../components/Images/pana.png';
import eye from '../components/Images/eye.png';
import calendarimage from '../components/Images/calendar.png';
import bluebell from '../components/Images/blue-bell.png';
import threedots from '../components/Images/three-dots.png';
import arrowdownblue from '../components/Images/arrow-down-blue.png';
import Navigation from '../components/Navigation';
import Calendars from '../components/Calendars';
import Header from '../components/Header';


function Schedule() {
    return(
        <div className='body'>
            <Container fluid>
                <Row>
                    <Navigation/>
                    <Col xs={12} md={12} lg={10} className="schedule-body">
                        <Header/>
                        <div className="welcome-schedule">
                            <Row>
                                <Col lg={8} md={7} className="welcome-col">
                                    <h3>Your Schedule</h3>
                                    <p>All client consultations are available here. You can intiate consultations for each client's procedure.</p>
                                    <div className='schedule-button-div'>
                                        <button className="welcome-col-button"><img src={eye} alt='Eye Icon' className='eye'></img>View your appointments</button>
                                    </div>
                                </Col>
                                <Col lg={4} md={5}>
                                    <div className='person-div'>
                                        <img src={person} alt="Person Vector" className='person-vector-schedule'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='body-div'>
                            <Row>
                                <Col xs={12} md={12} lg={4} className='calendar-activities-col'>
                                    <Row>
                                        <Col xs={12} md={6} lg={12}>
                                        <div className='calendar-div schedule-calendar-div'>
                                            <Calendars/>
                                        </div>
                                        </Col>
                                        <Col xs={12} md={6} lg={12}>
                                            <div className='activities-div schedule-activities-div'>
                                                <Row>
                                                    <Col md={10} lg={10} xs={10}>
                                                        <p className='patients-by-gender'><span className='border-bottom-blue'>Rece</span>nt Activity</p>
                                                    </Col>
                                                    <Col md={2} lg={2} xs={2} className='notification-bell-col'>
                                                        <img src={bluebell} alt="User" className='notification-bell-image'></img>
                                                    </Col>
                                                </Row>
                                                <Row className='notification-each'>
                                                    <Col md={2} lg={2} xs={2} className='notification-image-col'>
                                                        <img src={calendarimage} alt="Person" className='activities-icon'></img>
                                                    </Col>
                                                    <Col md={10} lg={10} xs={10} className='notification-text-col'>
                                                        <span className='notification-span'>There are 3 new ready reports for <span className='notification-name'>Tosin Odubela</span></span>
                                                    </Col>
                                                </Row>
                                                <Row className='notification-each'>
                                                    <Col md={2} lg={2} xs={2} className='notification-image-col'>
                                                        <img src={calendarimage} alt="Person" className='activities-icon'></img>
                                                    </Col>
                                                    <Col md={10} lg={10} xs={10} className='notification-text-col'>
                                                        <span className='notification-span'>There are 3 new ready reports for <span className='notification-name'>Tosin Odubela</span></span>
                                                    </Col>
                                                </Row>
                                                <Row className='notification-each'>
                                                    <Col md={2} lg={2} xs={2} className='notification-image-col'>
                                                        <img src={calendarimage} alt="Person" className='activities-icon'></img>
                                                    </Col>
                                                    <Col md={10} lg={10} xs={10} className='notification-text-col'>
                                                        <span className='notification-span'>There are 3 new ready reports for <span className='notification-name'>Tosin Odubela</span></span>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={12} lg={8} className='appointment-col'>
                                    <div className='next-patients-div schedule-patient-div'>
                                        <Row>
                                            <Col lg={8} md={8} xs={8} className='schedule-patients-date-col'>
                                                <p className='patients-by-gender schedule-patients-by-gender'><span className='border-bottom-blue'>Thurs</span>day - 18th February, <span className='schedule-year'>2021</span></p>
                                            </Col>
                                            <Col lg={4} md={4} xs={4} className='schedule-patients-show-col'>
                                                <p className='patients-this schedule-patients-this'>Show by <span className='patients-month'>Day</span> <img src={arrowdownblue} alt="Arrow" className='arrow-down'></img></p>
                                            </Col>
                                        </Row>
                                        <div className='appointment-list-div'>
                                            <div className='appointment-list-image-div'>
                                                <img src={person} alt="User" className='appointment-list-image'></img>
                                                <img src={person} alt="User" className='appointment-list-image list-image-two'></img>
                                                <img src={person} alt="User" className='appointment-list-image list-image-three'></img>
                                                <img src={person} alt="User" className='appointment-list-image list-image-four'></img>
                                            </div>
                                            <span>You have 4 new appointments scheduled</span>
                                        </div>
                                        <Row className='patients-row first-row schedule-appointment-patients-first-row'>
                                            <Col xs={2} md={1} lg={1} className='patients-time'>
                                                <span>09:00AM</span>
                                            </Col>
                                            <Col xs={10} md={11} lg={11} className='patients-info'>
                                                <div className='patients-info-div'>
                                                    <div>
                                                        <img src={person} alt="User" className='patients-image'></img><span className='patients-name'>Guy Hawkins</span>
                                                    </div>
                                                    <div className='threedots-div'>
                                                        <img src={threedots} alt='Menu' className='threedots'></img>    
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='patients-row'>
                                            <Col xs={2} md={1} lg={1} className='patients-time'>
                                                <span>09:00AM</span>
                                            </Col>
                                            <Col xs={10} md={11} lg={11} className='patients-info'>
                                                <div className='patients-info-div'>
                                                    <div>
                                                        <img src={person} alt="User" className='patients-image'></img><span className='patients-name'>Guy Hawkins</span>
                                                    </div>
                                                    <div className='threedots-div'>
                                                        <img src={threedots} alt='Menu' className='threedots'></img>    
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='patients-row'>
                                            <Col xs={2} md={1} lg={1} className='patients-time'>
                                                <span>09:00AM</span>
                                            </Col>
                                            <Col xs={10} md={11} lg={11} className='patients-info'>
                                                <div className='patients-info-div'>
                                                    <div>
                                                        <img src={person} alt="User" className='patients-image'></img><span className='patients-name'>Guy Hawkins</span>
                                                    </div>
                                                    <div className='threedots-div'>
                                                        <img src={threedots} alt='Menu' className='threedots'></img>    
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className='time-list-div'>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>02:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>03:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>04:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>07:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>08:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={2} md={1} lg={1} className='time-list-col'>
                                                    <span className='time-list-span'>09:00AM</span>
                                                </Col>
                                                <Col xs={10} md={11} lg={11} className='time-list-col-two'>
                                                    <hr></hr>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Schedule;