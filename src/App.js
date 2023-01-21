import './App.css';
import React from 'react';
import Calculator from './components/Calculator';
import './components/logic/calculate';
import './components/logic/operate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
