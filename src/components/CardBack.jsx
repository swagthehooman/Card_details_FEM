import React from "react";

export default function CardBack(props){
    return (
        <div className="card-back">
            <img className='card-back__bg' src='../images/bg-card-back.png' alt='card back'/>
            <span className="card-back__cvv">{props.cardBackInfo.cvv===''?'000': props.cardBackInfo.cvv}</span>
        </div>
    )
}