import React from 'react';
import './CalendarDay.scss';

class CalendarDay extends React.Component {

  render() {
   return <div className="calendarDay" style={this.props.style}>
        <span>{this.props.day}</span>
    </div>
  }
}

export default CalendarDay;