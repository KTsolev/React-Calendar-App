import React from 'react';
import CalendarHeader from '../CalendarHeader/CalendarHeader';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import Overlay from '../Overlay/Overlay';
import { CalendarContext } from '../CalendarContext/CalendarContext';
import moment from 'moment';
import './Calendar.scss';
import { clone } from '@babel/types';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDay: moment(),
      showMonths: false,
      showYears: false,
      weekDayShort: moment.weekdaysShort(),
      choose: (num) => {
        const itemToChoose =  this.state.showMonths && !this.state.showYears ? 'month' :'year';
        const newDate = this.state.toDay.set(itemToChoose, num);
        this.setState({ toDay: newDate, showMonths: false });
      }
    }
    
    this.showMonthTable = this.showMonthTable.bind(this);
    this.showYearsTable = this.showYearsTable.bind(this);
  }

  showMonthTable() {
    this.setState({
        showMonths: !this.state.showMonths,
        showYears: false,
        weekDayShort: !!this.state.showMonths ? moment.weekdaysShort() : 'select month'
    });
  }

  showYearsTable() {
    this.setState({
        showYears: !this.state.showYears, 
        showMonths: false,
        weekDayShort: !!this.state.showYears ? moment.weekdaysShort() : 'select year'
    });
  }

  render() {
   console.log(this.state.toDay);
   return <CalendarContext.Provider value={this.state}>
       <div className="calendar">
        <div className="calendar-controls" onClick={this.showYearsTable}>
          <span className="calendar-headerText">{this.state.toDay.format('YYYY')}</span>
        </div>
        <div className="calendar-controls" onClick={this.showMonthTable}>
          <span className="calendar-headerText">{this.state.toDay.format('MMMM')}</span>
        </div>
        <CalendarHeader />
        {this.state.showMonths && !this.state.showYears ? 
            <Overlay 
              min={this.state.toDay.clone().set('month', 0)} 
              max={this.state.toDay.clone().set('month', 11)} />
           : this.state.showYears && !this.state.showMonths ? 
          <Overlay 
            min={this.state.toDay.clone().subtract(5, 'y')} 
            max={this.state.toDay.clone().add(5, 'y')} /> 
          : <CalendarMonth />}
      </div>
   </CalendarContext.Provider>
  }
}

export default Calendar;