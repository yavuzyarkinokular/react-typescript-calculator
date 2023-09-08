import React from "react"
import { useState } from "react"
import Result from "./Result"

const Input = () => {
  const [getFirstNumber, setGetValue] = useState(null)
  const [getSecondNumber, setGetNumber] = useState(null)
  function firstNumber(val: string) {
    setGetValue(val.target.value)
  }
  function secondNumber(val: string) {
    setGetNumber(val.target.value)
  }
  return (
    <div className="container">
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Sayıyı Giriniz
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={firstNumber}
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Sayıyı Giriniz
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={secondNumber}
        />
      </div>
      <Result firstValue={getFirstNumber} secondValue={getSecondNumber} />
    </div>
  )
}

export default Input
