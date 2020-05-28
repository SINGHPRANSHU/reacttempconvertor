import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import * as serviceWorker from './serviceWorker';



class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangec = this.handleChangec.bind(this);
    this.handleChangef = this.handleChangef.bind(this);
    this.state = {temperaturec: '',temperaturef:''};
  }

  handleChangec(e) {
    this.setState({temperaturec: e.target.value,temperaturef: (e.target.value*9/5)+32});
  }
  handleChangef(e) {
    this.setState({temperaturef: e.target.value,temperaturec:(e.target.value - 32) * 5 / 9});
  }
 
  

  render() {
    const temperaturec = this.state.temperaturec;
    const temperaturef = this.state.temperaturef;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperaturec}
          onChange={this.handleChangec} />
          <br/>
          <legend>Enter temperature in fahrenheit:</legend>
          <input value={temperaturef} onChange={this.handleChangef}/>
        
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
