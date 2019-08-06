import React from 'react';
import { CalendarContext } from '../CalendarContext/CalendarContext';
import './Overlay.scss';

class Ovrerlay extends React.Component {
  constructor(props) {
    super(props);
    this.showTable = this.showTable.bind(this);
  }

  showTable(min, max, showMonths, showYears) {
    let items = [];

    if(showMonths) {
        for(let m = min; m.isSameOrBefore(max, 'month'); m.add(1, 'M')){
            items.push(m.format('MMMM'));
        }
    }
    if(showYears) {
        for(let m = min; m.isSameOrBefore(max, 'year'); m.add(1, 'Y')){
            items.push(m.format('YYYY'));
        }
    }
    return items;
  }

  render() {
   return <CalendarContext.Consumer>
        {(context) => {
            const {min, max} = this.props;
            const { showMonths, showYears, choose } = context;
            const items = this.showTable(min, max, showMonths, showYears);
            return <div className="overlay">   
                {items.map((item, index)=><span onClick={choose.bind(this, item)} key={index}>{item}</span>)}
            </div>
        }}
    </CalendarContext.Consumer>   

  }
}

export default Ovrerlay;