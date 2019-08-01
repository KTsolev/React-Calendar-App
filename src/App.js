import React from 'react';
import './App.scss';
import Calendar from './components/Calendar/Calendar';

class App extends React.Component {
  render() {   
    return <div className="app">
      <Calendar />
    </div>;
  }
}

export default App;
