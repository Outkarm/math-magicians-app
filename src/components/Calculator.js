import React, { useState } from "react";
import calculate from "./logic/calculate";

const Calculator = () => {
  const [display, newDisplay] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(display, btnName);
    newDisplay(answer);
  };
  const { total, next, operation } = display;

  return (
    <div id="calculator" className="calculator">
      <div id="ans" className="ans">
        {total}
        {operation}
        {next}
      </div>
      <div id="control-sec" className="control-sec">
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          AC
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          +/-
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          %
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn or"
        >
          ÷
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          7
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          8
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          9
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn or"
        >
          x
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          4
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          5
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          6
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn or"
        >
          -
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          1
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          2
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          3
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn or"
        >
          +
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn zero"
        >
          0
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn"
        >
          .
        </button>
        <button
          type="button"
          value="all-clear"
          onClick={buttonClicked}
          className="cBtn or"
        >
          =
        </button>
      </div>
    </div>
  );
};
export { Calculator as default };
