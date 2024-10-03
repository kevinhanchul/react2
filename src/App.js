import React, { Component } from 'react';

class SumComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      sum: null
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /*
  calculateSum = () => {
    const { number1, number2 } = this.state;
    const sum = parseFloat(number1) + parseFloat(number2);
    this.setState({ sum });
  };
  */

  /*
  BigNo = () => {
    const { number1, number2 } = this.state;
    var sum = 0;
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    if (num1 > num2){
      sum = num1;
    }
    else sum = num2;
    this.setState({ sum });
  };
  */

  OddNo = () => {
    const { number1, number2 } = this.state;
    var sum = "";
    var num1 = parseInt(number1);
    var num2 = parseInt(number2);
    if (num1 % 2 == 0){
      sum = "짝수";
    }
    else sum = "홀수";
    this.setState({ sum });
  };


  render() {
    const { number1, number2, sum } = this.state;

    return (
      <div>
        <h1>Sum Calculator</h1>
        <div>
          <input
            name="number1"
            value={number1}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            name="number2"
            value={number2}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.OddNo}>Calculate Sum</button>
        {sum !== null && (
          <div>
            <h2>Sum: {sum}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default SumComponent;


