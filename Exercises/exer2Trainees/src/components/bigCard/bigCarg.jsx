import React from "react";
import "./bigCard.css";

const BigCard = props => {
  const { planet } = props;
  const defaultText = "Select a planet!";
  if (!planet)
    return (
      <div className={"card_container"}>
        <h3>{defaultText}</h3>
      </div>
    );
  return (
    <div className={"planet_description"}>
      {Object.keys(planet).map(key => {
        return (
          <p key={key} className={"text"}>
            {`${key}: ${planet[key]}`}
          </p>
        );
      })}
    </div>
  );
};
export default BigCard;
