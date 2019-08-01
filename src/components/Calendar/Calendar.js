import React from 'react';
import CalendarHeader from '../CalendarHeader/CalendarHeader';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import moment from 'moment';
import './Calendar.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDay: moment(),
      weekDayShort: moment.weekdaysShort()
    }
  }
  render() {
   return <div className="calendar">
      <div className="calendar-controls">
        <i class="fas fa-arrow-circle-left"></i>
        <span className="calendar-headerText">{this.state.toDay.format('MMMM')}</span>
        <i class="fas fa-arrow-circle-right"></i>
      </div>
      <CalendarHeader weekDays={this.state.weekDayShort} />
      <CalendarMonth dateObject={this.state.toDay} />
    </div>
  }
}

export default Calendar;