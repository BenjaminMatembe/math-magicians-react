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
          <div className="light_grey center"><p>7</p></div>
          <div className="light_grey center"><p>8</p></div>
          <div className="light_grey center"><p>9</p></div>
          <div className="orange center"><p>X</p></div>
        </div>
        <div className="between" />
        <div className="second">
          <div className="light_grey center"><p>4</p></div>
          <div className="light_grey center"><p>5</p></div>
          <div className="light_grey center"><p>6</p></div>
          <div className="orange center"><p>_</p></div>
        </div>
        <div className="between" />
        <div className="second">
          <div className="light_grey center"><p>1</p></div>
          <div className="light_grey center"><p>2</p></div>
          <div className="light_grey center"><p>3</p></div>
          <div className="orange center"><p>+</p></div>
        </div>
        <div className="between" />
        <div className="second">
          <div className="light_grey center bigger"><p>0</p></div>
          <div className="light_grey center"><p>.</p></div>
          {/* <div className="light_grey center"><p></p></div> */}
          <div className="orange center"><p>=</p></div>
        </div>

      </div>
    </>

  );
}
