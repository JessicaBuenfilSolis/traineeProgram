import React from "react";
import "./NavBar.css";

export const NavBar = props => {
  return (
    <nav>
      <ul>
        {props.navbar.list.map(item => (
          <li
            key={item.id}
            className={item.active ? "active" : ""}
            onClick={props.onClick(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};
