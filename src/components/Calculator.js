import React from "react";
import calculate from "./logic/calculate";
import operate from "./logic/operate";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="calculator" className="calculator">
        <div id="ans" className="ans">
          0
        </div>
        <div id="control-sec" className="control-sec">
          <div className="cBtn">AC</div>
          <div className="cBtn">+/-</div>
          <div className="cBtn">%</div>
          <div className="cBtn or">÷</div>
          <div className="cBtn">7</div>
          <div className="cBtn">8</div>
          <div className="cBtn">9</div>
          <div className="cBtn or">x</div>
          <div className="cBtn">4</div>
          <div className="cBtn">5</div>
          <div className="cBtn">6</div>
          <div className="cBtn or">-</div>
          <div className="cBtn">1</div>
          <div className="cBtn">2</div>
          <div className="cBtn">3</div>
          <div className="cBtn or">+</div>
          <div className="cBtn zero">0</div>
          <div className="cBtn">.</div>
          <div className="cBtn or">=</div>
        </div>
      </div>
    );
  }
}
export { Calculator as default };
