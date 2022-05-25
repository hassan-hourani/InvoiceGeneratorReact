import React, { useState } from "react"
import mailIcon from "./assets/icons/mailIcon.png"
function App() {
  const [servicesState, setServicesState] = useState([])
  function handelClick(service) {
    if (!servicesState.includes(service))
      return (
        setServicesState(prev => {
          return [...prev, service]
        })
      )
  }
  function handelRemoveAnchor3(e) {
    let newArray = [...servicesState]
    newArray.splice(newArray.indexOf(e), 1)
    return setServicesState(newArray)
  }

  const servicesArray = servicesState.map(item => <h4 key={item}>{item}<a onClick={(e) => handelRemoveAnchor3(item)}>remove</a></h4>)
  const pricesArray = servicesState.map(item => <p key={item}><span>$</span>{item === "Wash Car" ? "10" : item === "Mow Lawn" ? "20" : "30"}</p>)
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Invoice creator</h1>
          <p>Thanks for choosing GoodCorp, LLC!</p>
        </div>
        <div className="services-btns">
          <button onClick={(event) => handelClick("Wash Car")}>Wash Car: $10</button>
          <button onClick={(event) => handelClick("Mow Lawn")}>Mow Lawn: $20</button>
          <button onClick={(event) => handelClick("Pull Weeds")}>Pull Weeds: $30</button>
        </div>
        <div className="summary">
          <div className="tasks">
            <p className="tasks-title">TASK</p>
            {servicesArray}
          </div>
          <div className="total">
            <p className="total-title">TOTAL</p>
            {pricesArray}
          </div>
        </div>
        <div className="payment">
          <div className="notes">
            <div className="note">
              <p>NOTES</p>
              <p>We accept cash, credit card, or PayPal</p>
            </div>
            <div className="price">
              <p>TOTAL AMOUNT</p>
              <p><span>$60</span></p>
            </div>
          </div>
          <button><img src={mailIcon} />Send Invoice</button>
        </div>
      </div>
    </>
  )
}
export default App;
