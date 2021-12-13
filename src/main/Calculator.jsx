import React, { Component } from "react";
import "./Calculator.css";
import Button from "../components/Button";
import Display from "./Display";

export default class Calculator extends Component {
  clearMemory() {
    console.log("clear");
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(digit) {
    console.log(digit)
  }

  render() {
    const addDigit = digit => this.addDigit(digit)
    const setOperation = operation => this.setOperation(operation)

    return (
      <div className="calculator">
        <Display value={10000}></Display>
        <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </div>
    );
  }
}
