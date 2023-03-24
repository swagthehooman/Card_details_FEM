import React, { useState, useEffect } from "react";
import CardForm from "./components/CardForm";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

function App() {
  const cardRegex = new RegExp("^[0-9]{16}$");
  const cvvRegex = new RegExp("^[1-9][0-9]{2}$");
  const monthRegex = new RegExp("(^0[1-9]$)|(^1[0-2]$)");
  const yearRegex = new RegExp("(^0[1-9]$)|(^[1-9]{2}$)");

  const [cardInfo, setCardInfo] = useState({
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [isValid, setIsValid] = useState({
    cardNumberValid: false,
    monthValid: false,
    yearValid: false,
    cvvValid: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleConfirm(event) {
    setConfirm((prev) => !prev);
    var number = cardInfo.cardNumber;
    var month = cardInfo.month;
    var year = cardInfo.year;
    var cvv = cardInfo.cvv;

    if (cardRegex.test(number)) {
      setIsValid((prev) => ({
        ...prev,
        cardNumberValid: true,
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        cardNumberValid: false,
      }));
    }
    if (monthRegex.test(month)) {
      setIsValid((prev) => ({
        ...prev,
        monthValid: true,
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        monthValid: false,
      }));
    }
    if (yearRegex.test(year)) {
      setIsValid((prev) => ({
        ...prev,
        yearValid: true,
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        yearValid: false,
      }));
    }
    if (cvvRegex.test(cvv)) {
      setIsValid((prev) => ({
        ...prev,
        cvvValid: true,
      }));
    } else {
      setIsValid((prev) => ({
        ...prev,
        cvvValid: false,
      }));
    }
    console.log(isValid);
  }
  //use for changing the form confirmation looks and other things

  return (
    <main>
      <div className="card-holder">
        <CardFront cardFrontInfo={cardInfo} />
        <CardBack cardBackInfo={cardInfo} />
      </div>
      <CardForm
        handleChange={handleChange}
        cardInfo={cardInfo}
        confirm={handleConfirm}
        validation={isValid}
      />
    </main>
  );
}

export default App;
