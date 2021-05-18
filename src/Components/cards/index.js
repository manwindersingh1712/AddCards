import React from "react";
import "./index.css";

function Card({ link }) {
  return (
    <div className="card_container">
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          View
        </a>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default Card;
