import React from "react"
import ButtonGroup from "./ButtonGroup"
interface Props {
  firstValue: string
  secondValue: string
}

const Result = ({ firstValue, secondValue }: Props) => {
  const result = firstValue + " " + secondValue
  const conditionalResult = firstValue && secondValue ? result : null
  return (
    <div className="d-inline-flex ">
      <ButtonGroup />
      {firstValue && secondValue ? (
        <div class="alert alert-success " role="alert">
          Sonucunuz: <b>{conditionalResult}</b>
        </div>
      ) : null}
    </div>
  )
}

export default Result
