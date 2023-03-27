import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import './myStyles.css';


function Calendars() {
    const [value, onChange] = useState(new Date());
    return(
        <div>
            <Calendar onChange={onChange} value={value} className='react-calendar'/>
            <p className='calendar-para'>Today's date is <b>{moment(value).format('MMMM Do YYYY')}</b></p>
        </div>
    );
}
export default Calendars;