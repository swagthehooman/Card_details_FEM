import React from "react";

export default function CardFront(props) {
  var temp = props.cardFrontInfo.cardNumber;
  var number = "";
  for (let i = 0; i < temp.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      number += " ";
      number += temp.charAt(i);
    } else {
      number += temp.charAt(i);
    }
  }
  return (
    <div className="card-front">
      <img
        className="card-front__bg"
        src="../images/bg-card-front.png"
        alt="card front"
      />
      <img
        className="card-front__logo"
        src="../images/card-logo.svg"
        alt="logo"
      />
      <span className="card-front__number">
        {props.cardFrontInfo.cardNumber === "" ? "0000 0000 0000 0000" : number}
      </span>
      <span className="card-front__name">
        {props.cardFrontInfo.cardName === ""
          ? "FELICIA LEIRE"
          : props.cardFrontInfo.cardName.toUpperCase()}
      </span>
      <span className="card-front__validity">
        {props.cardFrontInfo.month === "" ? "00" : props.cardFrontInfo.month}/
        {props.cardFrontInfo.year === "" ? "00" : props.cardFrontInfo.year}
      </span>
    </div>
  );
}
