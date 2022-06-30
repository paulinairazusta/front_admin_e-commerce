import React from "react";
import "./card.css";


const Card = ({ title, icon, amount, percentage }) => {
  return (
    <div className="card-container">
      <h5>{title}</h5>
      <div className="circle">{icon}</div>
      <h1>{amount}</h1>
      <span>{percentage}%</span>
      <span>Since last week</span>
    </div>
  );
};

export default Card;
