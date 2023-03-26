import React, {useRef} from 'react';
import '../components/myStyles.css';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstraps/dist/css/bootstrap.css';
import person from '../components/Images/person.png';
import statsperson from '../components/Images/stats-person.png';
import calendarimage from '../components/Images/calendar.png';
import clock from '../components/Images/Vector.png';
//import threedots from '../../components/Images/three-dots.png';
import arrowdown from '../components/Images/arrow-down.png';
import arrowdownblue from '../components/Images/arrow-down-blue.png';
import arrowright from '../components/Images/arrow-right.png';
import buttonarrowright from '../components/Images/button-arrow.png';
import bluebell from '../components/Images/blue-bell.png';
import male from '../components/Images/male.png';
import female from '../components/Images/female.png';
import trans from '../components/Images/trans.png';
import others from '../components/Images/others.png';
import eye from '../components/Images/eye.png';
import Navigation from '../components/Navigation';
import Calendars from '../components/Calendars';
import Header from '../components/Header';
import lossarrow from '../components/Images/loss-arrow.png';
import gainarrow from '../components/Images/gain-arrow.png';
import { PieChart } from "react-minimal-pie-chart";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';


function Dashboard() {
    
    const profitChartRef = useRef();
    if (profitChartRef?.current) {
        profitChartRef.current.chartInstance.destroy();
    }
    let data = [
        { title: "One", value: 1, color: "#FF8080" },
        { title: "Two", value: 2, color: "#00CFDE" },
        { title: "Three", value: 3, color: "#5A5EED" },
        { title: "Four", value: 4, color: "#20CB85" },
    ];
    const groupeddata = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          { 
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 1.5,
            barThickness: 6,
            maxBarThickness: 6,
            minBarLength: 2,
            label: 'First dataset',
            backgroundColor: '#06A77D',
            data: [25, 15, 50, 41, 56, 55, 40, 35, 40, 55, 28, 32]
          },
          {
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 1.5,
            barThickness: 6,
            maxBarThickness: 6,
            minBarLength: 2,
            label: 'Second dataset',
            backgroundColor: '#FF8080',
            data: [10, 5, 10, 11, 16, 45, 20, 55, 59, 20, 31, 56]
          }
        ],
        borderWidth: 1
    }
    const options = {
        responsive: true,
        barValueSpacing: 20,
        plugins: {
            legend: {
              display: false,
            },
        },
        type:'bar',
        scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                font: {
                    weight: 500,
                    size: 13
                }
              }
            },
            y: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                font: {
                    weight: 400,
                    size: 13
                }
              }
            },
        },
        layout: {
            padding: {
                left: 0
            }
        },
        tooltips: {
            callbacks: {
               title: function() {}
            }
         },
    }
    return(
        <div className='body'>
            <Container fluid>
                <Row>
                    <Navigation/>
                    <Col xs={12} md={12} lg={10} className="dashboard-body">
                        <Header/>
                        <Row className='dashboard-row'>
                            <Col md={12} lg={8} xs={12} className="dashboard-col">
                                <div className="welcome">
                                    <Row>
                                        <Col lg={8} md={7} className="welcome-col">
                                            <h3>Welcome, Dr. Fayemi David</h3>
                                            <p>You have 16 new appointments and there are currently 23,445 patients in the waiting room. Have a nice day at work!</p>
                                            <Row>
                                                <Col lg={6} className='view-appointments'>
                                                    <button className="welcome-col-button"><img src={eye} alt='Eye Icon' className='eye'></img>View your appointments</button>
                                                </Col>
                                                <Col lg={6}>
                                                    <button className="welcome-col-button">Go to waiting room<img src={buttonarrowright} alt='Eye Icon' className='button-arrow'></img></button>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={4} md={5}>
                                            <div className='person-div'>
                                                <img src={person} alt="Person Vector" className='person-vector'></img>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='calendar-div real'>
                                    <Calendars/>
                                </div>
                                <div className='stats-div'>
                                    <Row>
                                        <Col md={4} lg={4} xs={12} className="stats-col-one">
                                            <div className='one'>
                                                <Row>
                                                    <Col lg={5} md={5} xs={6}>
                                                        <div className='schedule-image-div schedule-image-div-one'>
                                                            <img src={statsperson} alt="Person" className='schedule-image'></img>
                                                        </div>
                                                    </Col>
                                                    <Col lg={7} md={7} xs={6}>
                                                        <p className='all-time'>All time <img src={arrowdown} alt="Arrow" className='arrow-down'></img></p>
                                                    </Col>
                                                </Row>
                                                <p className='number'>12,345</p>
                                                <p className='patients'>Total Patients</p>
                                                <p className='last-month'><img src={lossarrow} className='stats-arrow' alt='Loss Arrow'></img><span>5% less than last month</span></p>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={4} xs={12} className="stats-col-two">
                                            <div className='one'>
                                                <Row>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <div className='schedule-image-div schedule-image-div-two'>
                                                            <img src={calendarimage} alt="Person" className='appointment-image'></img>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <p className='all-time'>Today <img src={arrowdown} alt="Arrow" className='arrow-down'></img></p>
                                                    </Col>
                                                </Row>
                                                <p className='number'>25</p>
                                                <p className='patients'>Appointments</p>
                                                <p className='last-month'><img src={gainarrow} className='stats-arrow' alt='Gain Arrow'></img><span>15% more than yesterday</span></p>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={4} xs={12} className="stats-col">
                                            <div className='one'>
                                                <Row>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <div className='schedule-image-div schedule-image-div-three'>
                                                            <img src={clock} alt="Person" className='waiting-image'></img>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={6}>
                                                        <p className='all-time'>Today <img src={arrowdown} alt="Arrow" className='arrow-down'></img></p>
                                                    </Col>
                                                </Row>
                                                <p className='number'>21,045</p>
                                                <p className='patients'>Waiting Room</p>
                                                <p className='last-month'><img src={gainarrow} className='stats-arrow' alt='Gain Arrow'></img><span>35% less than yesterday</span></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='next-patients-div'>
                                    <Row>
                                        <Col lg={8} md={8} xs={8}>
                                            <p className='patients-by-gender'><span className='border-bottom-blue'>Your</span> next patients</p>
                                        </Col>
                                        <Col lg={4} md={4} xs={4}>
                                            <p className='patients-this'><span className='patients-month'>View All</span> <img src={arrowright} alt="Arrow" className='arrow-right'></img></p>
                                        </Col>
                                    </Row>
                                    <Row className='patients-row first-row'>
                                        <Col xs={2} md={1} lg={1} className='patients-time'>
                                            <span>09:00AM</span>
                                        </Col>
                                        <Col xs={10} md={11} lg={11} className='patients-info'>
                                            <div className='patients-info-div'>
                                                <div>
                                                    <img src={person} alt="User" className='patients-image'></img><span className='patients-name'>Guy Hawkins</span>
                                                </div>
                                                <div className='threedots-div'>
                                                    <img src={person} alt='Menu' className='threedots'></img>    
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
                                                    <img src={person} alt='Menu' className='threedots'></img>    
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
                                                    <img src={person} alt='Menu' className='threedots'></img>    
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='statistics-div'>
                                    <Row>
                                        <Col lg={8} md={8} xs={7}>
                                            <p className='patients-by-gender'><span className='border-bottom-blue'>Appoi</span>ntment Statistics</p>
                                        </Col>
                                        <Col lg={4} md={4} xs={5}>
                                            <p className='patients-this'>Show <span className='patients-month'>by month</span> <img src={arrowdownblue} alt="Arrow" className='arrow-down'></img></p>
                                        </Col>
                                    </Row>
                                    <div className='bar-chart'>
                                        <Bar
                                            data={groupeddata}
                                            width={null}
                                            height={null}
                                            options={options}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={4} xs={12} className='calendar-col'>
                                <div className='calendar-div faux'>
                                    <Calendars/>
                                </div>
                                <Row>
                                    <Col md={6} lg={12} xs={12}>
                                        <div className="gender-stats">
                                            <Row>
                                                <Col lg={7} md={7} xs={7} className='by-gender-col'>
                                                    <p className='patients-by-gender'><span className='border-bottom-blue'>Patie</span>nts  by Gender</p>
                                                </Col>
                                                <Col lg={5} md={5} xs={5} className='this-col'>
                                                    <p className='patients-this'>This <span className='patients-month'>month</span> <img src={arrowdownblue} alt="Arrow" className='arrow-down'></img></p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={6} md={5} xs={5} className='patients-col patients-col-expand'>
                                                <div className="">
                                                        <PieChart
                                                            center={[50, 50]}
                                                            data={data}
                                                            lineWidth={8}
                                                            lengthAngle={360}
                                                            paddingAngle={0}
                                                            radius={50}
                                                            startAngle={0}
                                                            viewBoxSize={[100, 100]}
                                                        >
                                                            <g>
                                                                <text x="50%" y="45%" textAnchor="middle" stroke="#1D2B4F" strokeWidth="0.4px" dy=".3em" className='pie-number'>200,000</text>
                                                                <text x="50%" y="60%" textAnchor="middle" stroke="#8692A6" strokeWidth="0.3px" dy=".8em" className='pie-patient'>Patients</text>
                                                            </g>
                                                        </PieChart>
                                                    </div>
                                                </Col>
                                                <Col lg={6} md={6} xs={6} className='patients-col'>
                                                    <div className='genders-list'>
                                                        <p><img src={male} alt='Male' className='gender-color'></img>Male</p>
                                                        <p><img src={female} alt='Male' className='gender-color'></img>Female</p>
                                                        <p><img src={trans} alt='Male' className='gender-color'></img>Transgender</p>
                                                        <p><img src={others} alt='Male' className='gender-color'></img>Other</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={12} xs={12}>
                                        <div className='activities-div dashboard-activities-div'>
                                            <Row>
                                                <Col md={10} lg={10} xs={10}>
                                                    <p className='patients-by-gender'><span className='border-bottom-blue'>Activ</span>ities</p>
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
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Dashboard;