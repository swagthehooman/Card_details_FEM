import React from "react";

export default function Completion() {
  return (
    <div className="input-form">
      <div className="completion">
        <img
          className="complete-img"
          src="./images/icon-complete.svg"
          alt="tick"
        />
        <h1>THANK YOU</h1>
        <p className="details">We've added your card details</p>
        <button>Continue</button>
      </div>
    </div>
  );
}
