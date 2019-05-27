import React from "react";
import "./list.css";

const List = props => {
  const { elements } = props;
  if (!elements || elements.length === 0)
    return <p className={"negative_text"}>No planets to show</p>;
  return (
    <div className={"list_container"}>
      {elements.map(item => (
        <button
          className={"planet"}
          onClick={() => props.onListClick(item)}
          key={item.name}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default List;
