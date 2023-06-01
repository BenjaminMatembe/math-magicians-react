import React, { useState } from 'react';
import calculate from './logic/calculator';
import './Calculator.css';
import Heading from './CalculatorChild';

export default function Calculator() {
  const [calculatingData, setCalculatingData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (nameOfButton) => {
    setCalculatingData(calculate(calculatingData, nameOfButton));
  };
  return (
    <>

      <div className="calculator">
        <div className="top"><Heading value={calculatingData.next || calculatingData.total || '0'} /></div>
        <div className="second">
          <button type="button" className="light_grey center" onClick={() => handleClick('AC')}><p>AC</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('+/-')}><p>+/-</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('%')}><p>%</p></button>
          <button type="button" className="orange center" onClick={() => handleClick('÷')}><p>÷</p></button>
        </div>
        <div className="between" />
        <div className="second">
          <button type="button" className="light_grey center" onClick={() => handleClick('7')}><p>7</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('8')}><p>8</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('9')}><p>9</p></button>
          <button type="button" className="orange center" onClick={() => handleClick('x')}><p>x</p></button>
        </div>
        <div className="between" />
        <div className="second">
          <button type="button" className="light_grey center" onClick={() => handleClick('4')}><p>4</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('5')}><p>5</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('6')}><p>6</p></button>
          <button type="button" className="orange center" onClick={() => handleClick('-')}><p>-</p></button>
        </div>
        <div className="between" />
        <div className="second">
          <button type="button" className="light_grey center" onClick={() => handleClick('1')}><p>1</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('2')}><p>2</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('3')}><p>3</p></button>
          <button type="button" className="orange center" onClick={() => handleClick('+')}><p>+</p></button>
        </div>
        <div className="between" />
        <div className="second">
          <button type="button" className="light_grey center bigger" onClick={() => handleClick('0')}><p>0</p></button>
          <button type="button" className="light_grey center" onClick={() => handleClick('.')}><p>.</p></button>
          <button type="button" className="orange center" onClick={() => handleClick('=')}><p>=</p></button>
        </div>

      </div>
    </>

  );
}
