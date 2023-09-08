import React from "react"

const ButtonGroup = () => {
  function divideCalculation() {
    console.log("divide calculation")
  }
  function minusCalculation() {
    console.log("minus calculation")
  }
  function multiplyCalculation() {
    console.log("multiply calculation")
  }
  function addCalculation() {
    console.log("add calculation")
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-around ">
        <button className="btn btn-primary" onClick={divideCalculation}>
          {" "}
          Divide{" "}
        </button>
        <button className="btn btn-secondary" onClick={minusCalculation}>
          {" "}
          Minus{" "}
        </button>
        <button className="btn btn-danger" onClick={multiplyCalculation}>
          {" "}
          Multiply{" "}
        </button>
        <button className="btn btn-success " onClick={addCalculation}>
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  )
}

export default ButtonGroup
