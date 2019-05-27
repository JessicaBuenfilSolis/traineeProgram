import React from "react";
import "./title.css";

const Title = props => {
  const { planet } = props;
  if (!planet) return <p className={"title"}>Planets!</p>;
  return (
    <div className={"title"}>
      <h4>{planet.name}</h4>
    </div>
  );
};

export default Title;
