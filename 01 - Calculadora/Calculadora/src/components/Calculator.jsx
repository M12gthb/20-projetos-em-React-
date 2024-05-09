import React from "react";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperator, setPendingOperator] = useState(null);
  const [pendingValue, setpendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["+", "-", "*", "/"];

  const handleClick = (value) => {
    setCurrentValue((preValue) => {
      if (preValue === "0") {
        return value;
      } else {
        return preValue + value;
      }
    });
    setCompleteOperation((prevOperation) => prevOperation + " " + value);
  };

  const handleClear = () => {
    setCurrentValue("0");
    setCompleteOperation("");
    setPendingOperator(null);
    setpendingValue(null);
  };

  const handleOperator = (operation) => {
    setCompleteOperation(currentValue + " " + operation);
    setPendingOperator(operation);
    setpendingValue(currentValue);
    setCurrentValue("0");
  };

  const handleCalculate = () => {
    if (!pendingOperator || !pendingValue) {
      return;
    }

    const num1 = parseFloat(pendingValue);
    const num2 = parseFloat(currentValue);

    let result;

    switch (pendingOperator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 != "0") {
          result = num1 / num2;
        } else {
          setCurrentValue("ERROR");
          setCompleteOperation("ERROR");
          setPendingOperator(null);
          setpendingValue(null);
          return;
        }
        break;
      default:
        break;
    }

    setCompleteOperation(
      pendingValue + " " + pendingOperator + " " + currentValue + " = " + result
    );
    setCurrentValue(result.toString());
    setPendingOperator(null);
    setpendingValue(null);
  };
  return (
    <div className="calculator">
      <div className="complete-operator">{completeOperation}</div>
      <div className="display">{currentValue}</div>
      <div className="buttons">
        <button onClick={() => handleClear()}>AC</button>
        {numbers.map((num) => {
          return (
            <button key={num} onClick={() => handleClick(num)}>
              {num}
            </button>
          );
        })}
        {operators.map((op) => {
          return (
            <button key={op} onClick={() => handleOperator(op)}>
              {op}
            </button>
          );
        })}
        <button onClick={() => handleCalculate()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
