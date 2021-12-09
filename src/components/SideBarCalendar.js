import React, {Component} from 'react';
import Calendar from 'react-calendar'

class SideBarCalendar extends Component {
    render() {
        return (
            <div className="calendar-container">
                <div className="calender-topBar">
                    <button className="calendar-button">Calender</button>
                    <button className="calendar-button">Reminder</button>
                </div>

                <div className="calender-body">
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default SideBarCalendar;