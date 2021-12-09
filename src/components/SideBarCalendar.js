import React, {Component} from 'react';
import Calendar from 'react-calendar'
import './SideBarCalendar.css'

class SideBarCalendar extends Component {
    render() {
        return (
            <div className="calendar-container">
                <div className="calendar-topBar">
                    <button className="calendar-button">Calendar</button>
                    <button className="reminder-button">Reminder</button>
                </div>

                <div className="calendar-body">
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default SideBarCalendar;