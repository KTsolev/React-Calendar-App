import React from 'react';
import './CalendarMonth.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import moment from 'moment';

class CalendarMonth extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        toDay: moment()
      };
  }  
  
  firstDayOfMonth() {
    let firstDay = moment(this.props.dateObject)
                    .startOf("month")
                    .format("d"); 

    return firstDay;
  }
  
  fillBlanks() {
    let blanks = [];
    
    for (let i = 0; i < Number(this.firstDayOfMonth()); i++) {
      blanks.push(
        <CalendarDay className="calendarDay calendarDay--empty" key={1} day={""} />
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
    
    for (let d = 1; d <= this.props.dateObject.daysInMonth(); d++) {
      daysInMonth.push(
        <CalendarDay key={d} style={ black } day={d} />
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

  componentWillReceiveProps(nextProps) {
      if(this.props.dateObject.format('YYYY-MM-DD') !== nextProps.dateObject.format('YYYY-MM-DD')) {
          this.getTotalDays();
      }
  }
  
  render() {
    let rows = this.getTotalDays();
    console.log(rows);
    return <div className="calendarMonth">
            {rows.map(item => {
                return item.map(d => {
                    return d;
                })
                })
            }
        </div>;
    }
}

export default CalendarMonth;