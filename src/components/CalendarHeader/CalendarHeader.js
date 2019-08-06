import './CalendarHeader.scss';
import React from 'react';
import CalendarDay from '../CalendarDay/CalendarDay';
import { CalendarContext } from '../CalendarContext/CalendarContext';

class CalendarHeader extends React.Component {

  render() {
   return <CalendarContext.Consumer>
     {(context) => {
       const weekDays = context.weekDayShort;
       let header = null;
       if (weekDays instanceof Array) {
        header = <div className="headerHolder">
          { weekDays.map((item, index) => (
          <CalendarDay 
            className="headerHolder-title" 
            day={item} 
            key={index} />)) }
        </div>;
       } else {
        header = <div className="headerHolder headerHolder--oneColumn">
          <span className="headerHolder-title">{weekDays}</span>
        </div>;
       }
       return header;
    }} 
   </CalendarContext.Consumer>
  }
}

export default CalendarHeader;