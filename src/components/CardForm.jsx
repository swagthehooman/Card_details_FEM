import React from "react";

export default function CardForm(props){
    return (
        <div className="input-form">
        <div className="form-container">
            <div className="cardholder-info">
                <label>CARDHOLDER NAME</label>
                <input type="text" placeholder="e.g. Jane Appleseed" 
                    name="cardName" onChange={props.handleChange} value={props.cardInfo.cardName}/>
            </div>
            <div className="cardholder-info">
                <label>CARD NUMBER</label>
                <input type="text" placeholder="e.g. 1234 5678 9123 0000"
                    name="cardNumber" onChange={props.handleChange} value={props.cardInfo.cardNumber}/>
            </div>
            <div className="exp-cvv-date">
                    <div className="exp-date">
                        <label>EXP. DATE (MM/YY)</label>
                        <div className="date">
                            <input type="text" placeholder="MM" name="month" 
                                onChange={props.handleChange} value={props.cardInfo.month}/>
                            <input type="text" placeholder="YY" name="year" 
                                onChange={props.handleChange} value={props.cardInfo.year}/>
                        </div>
                    </div>
                    <div className="cvv">
                        <label>CVC</label>
                        <input type="text" placeholder="e.g. 123" name="cvv" 
                            onChange={props.handleChange} value={props.cardInfo.cvv}/>
                    </div>
            </div>
            <button onClick={props.confirm}>Confirm</button>
        </div>
        </div>
    )
}