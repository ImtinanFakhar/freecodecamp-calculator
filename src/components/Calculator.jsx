import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (value) => {
    if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleOperatorClick = (value) => {
    if (operator && input) {
      const calculation = calculate();
      setResult(calculation);
      setPrevValue(calculation);
      setInput('');
    } else {
      setPrevValue(input);
      setInput('');
    }
    setOperator(value);
  };

  const handleDecimalClick = () => {
    if (!input.includes('.')) {
      setInput(input + '.');
    }
  };

  const handleClearClick = () => {
    setInput('0');
    setResult('');
    setPrevValue('');
    setOperator('');
  };

  const handleEqualClick = () => {
    if (operator && input) {
      const calculation = calculate();
      setResult(calculation);
      setInput(calculation);
      setPrevValue('');
      setOperator('');
    }
  };

  const calculate = () => {
    const prev = parseFloat(prevValue);
    const current = parseFloat(input);
    let calculation = 0;
    switch (operator) {
      case '+':
        calculation = prev + current;
        break;
      case '-':
        calculation = prev - current;
        break;
      case '*':
        calculation = prev * current;
        break;
      case '/':
        calculation = prev / current;
        break;
      default:
        break;
    }
    return calculation.toString();
  };

  return (
    <div id="calculator">
      <div id="display">{result || input}</div>
      <div className="buttons">
        <button id="clear" onClick={handleClearClick}>AC</button>
        <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
        <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
        <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
        <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
        <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
        <button id="four" onClick={() => handleNumberClick('4')}>4</button>
        <button id="five" onClick={() => handleNumberClick('5')}>5</button>
        <button id="six" onClick={() => handleNumberClick('6')}>6</button>
        <button id="one" onClick={() => handleNumberClick('1')}>1</button>
        <button id="two" onClick={() => handleNumberClick('2')}>2</button>
        <button id="three" onClick={() => handleNumberClick('3')}>3</button>
        <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
        <button id="decimal" onClick={handleDecimalClick}>.</button>
        <button id="equals" onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
1