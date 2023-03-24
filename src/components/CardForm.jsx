import React from "react";

export default function CardForm(props) {
  return (
    <div className="input-form">
      <div className="form-container">
        <div className="cardholder-info">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            name="cardName"
            onChange={props.handleChange}
            value={props.cardInfo.cardName}
          />
        </div>
        <div className="cardholder-info">
          <label>CARD NUMBER</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            name="cardNumber"
            onChange={props.handleChange}
            value={props.cardInfo.cardNumber}
          />
          {!props.validation.cardNumberValid && (
            <p className="error">Wrong format, numbers only.</p>
          )}
        </div>
        <div className="exp-cvv-date">
          <div className="exp-date">
            <label>EXP. DATE (MM/YY)</label>
            <div className="date">
              <div>
                <input
                  type="text"
                  placeholder="MM"
                  name="month"
                  onChange={props.handleChange}
                  value={props.cardInfo.month}
                />
                {!props.validation.monthValid && (
                  <p className="error">Wrong format.</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="YY"
                  name="year"
                  onChange={props.handleChange}
                  value={props.cardInfo.year}
                />
                {!props.validation.yearValid && (
                  <p className="error">Wrong format.</p>
                )}
              </div>
            </div>
          </div>
          <div className="cvv">
            <label>CVV</label>
            <input
              type="text"
              placeholder="e.g. 123"
              name="cvv"
              onChange={props.handleChange}
              value={props.cardInfo.cvv}
            />
            {!props.validation.cvvValid && (
              <p className="error">Wrong format.</p>
            )}
          </div>
        </div>
        <button onClick={props.confirm}>Confirm</button>
      </div>
    </div>
  );
}
