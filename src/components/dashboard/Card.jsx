import React from "react";
import "./card.css";

const Card = ({ title, icon, amount, percentage }) => {
  return (
    <div className="card-container">
      <div className="title-img-container">
        <h5 className="card-title">{title}</h5>
        <div className="circle">{icon}</div>
      </div>
      <h1 className="amount">{amount}</h1>
      <div className="spans">
        <span className="percentage">{percentage }%</span>
        <span className="since">Since last week</span>
      </div>
    </div>
  );
};

export default Card;
