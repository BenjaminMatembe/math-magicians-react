import './Calculator.css';

import CalculatorChild from './CalculatorChild';

export default function Calculator() {
  return (
    <>
      <CalculatorChild />
      <div className="calculator">
        <div className="top"><p>0</p></div>
        <div className="second">
          <div className="light_grey center"><p>AC</p></div>
          <div className="light_grey center"><p>+/-</p></div>
          <div className="light_grey center"><p>%</p></div>
          <div className="orange center"><p>/</p></div>
        </div>
        <div className="between" />
        <div className="second">
          <div className="light_grey center"><p>AC</p></div>
          <div className="light_grey center"><p>+/-</p></div>
          <div className="light_grey center"><p>%</p></div>
          <div className="orange center"><p>/</p></div>
        </div>
        <div className="between" />
        <div className="second">
          <div className="light_grey center"><p>AC</p></div>
          <div className="light_grey center"><p>+/-</p></div>
          <div className="light_grey center"><p>%</p></div>
          <div className="orange center"><p>/</p></div>
        </div>
        <div className="between" />
        <div className="second">
          <div className="light_grey center"><p>AC</p></div>
          <div className="light_grey center"><p>+/-</p></div>
          <div className="light_grey center"><p>%</p></div>
          <div className="orange center"><p>/</p></div>
        </div>
        <div className="between" />
        <div className="second">
          <div className="light_grey center"><p>AC</p></div>
          <div className="light_grey center"><p>+/-</p></div>
          <div className="light_grey center"><p>%</p></div>
          <div className="orange center"><p>/</p></div>
        </div>

      </div>
    </>

  );
}