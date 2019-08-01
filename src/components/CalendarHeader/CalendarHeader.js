import './CalendarHeader.scss';
import React from 'react';
import CalendarDay from '../CalendarDay/CalendarDay';

class CalendarHeader extends React.Component {

  render() {
   return <div className="calendarHeader">
        {this.props.weekDays.map((item, index) => (<CalendarDay day={item} key={index} />))}
    </div>
  }
}

export default CalendarHeader;