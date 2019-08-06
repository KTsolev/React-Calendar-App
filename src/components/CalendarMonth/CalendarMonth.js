import React from 'react';
import './CalendarMonth.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import { CalendarContext } from '../CalendarContext/CalendarContext';
import moment from 'moment';

class CalendarMonth extends React.Component {
  firstDayOfMonth() {
    let firstDay = moment(this.context.toDay)
                    .startOf("month")
                    .format("d"); 

    return firstDay;
  }
  
  fillBlanks() {
    let blanks = [];
    
    for (let i = 0; i < Number(this.firstDayOfMonth()); i++) {
      blanks.push(
        <CalendarDay className="calendarDay calendarDay--empty" key={'empty'+i} day={"#"} />
      );
    }
    
    return blanks
  }  
  
  fillDaysInMonth() {
    let daysInMonth = [];
    let black = {
        color: '#707070',
        padding: '10px',
        fontSize: '16px',
    };
    
    for (let d = 1; d <= this.context.toDay.daysInMonth(); d++) {
      daysInMonth.push(
        <CalendarDay 
          key={'day'+d} 
          className={ Number(d) === Number(this.context.toDay.format('D')) ? 'calendarDay calendarDay--today' : 'calendarDay' } 
          style={ black } 
          day={d} />
      );
    }
    
    return daysInMonth;
  }

  getTotalDays() {
    let blanks = this.fillBlanks();
    let daysInMonth = this.fillDaysInMonth();  
    let totalSlots = [...blanks, ...daysInMonth];
    let cells = [];
    let rows = [];
    
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row);
        } else {
          rows.push(cells);
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1) {
          rows.push(cells);
        }
      });
      return rows;
  }
  
  render() {
    return <CalendarContext.Consumer>
      {(context) => {
       this.context = context;
       const rows = this.getTotalDays();
       return <div className="calendarMonth">
            {rows.map(item => {
                return item.map(d => {
                    return d;
                })
              })
            }
        </div>
      }}
    </CalendarContext.Consumer>
    }
}

export default CalendarMonth;