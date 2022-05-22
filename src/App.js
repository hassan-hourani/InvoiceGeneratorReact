import React, {useState} from "react"
import mailIcon from "./assets/icons/mailIcon.png"

const App = () => {
  const [state, setState] = useState(0)


 

return (
<>
  <div className="container">
    <div className="header">
      <h1>Invoice creator</h1>
      <p>Thanks for choosing GoodCorp, LLC!</p>
      </div>
      <div className="services-btns">
      <button>Wash Car: $10</button>
      <button>Mow Lawn: $20</button>
      <button>Pull Weeds: $30</button>
      </div>
      
      <div className="summary">
        <div className="tasks">
          <p className="tasks-title">TASK</p>
         
          <p>Wash Car <a>Remove</a></p>
          {/* <a>Remove</a> */}
          
          
          <p>Mow Lawn <a>Remove</a></p>
          {/* <a>Remove</a> */}
          
          <p>Pull Weeds <a>Remove</a></p>
          {/* <a>Remove</a> */}
          
        </div>
        <div className="total">
        <p className="total-title">TOTAL</p>
        <p><span>$</span>10</p>
        <p><span>$</span>20</p>
        <p><span>$</span>30</p>
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
)}


export default App;
