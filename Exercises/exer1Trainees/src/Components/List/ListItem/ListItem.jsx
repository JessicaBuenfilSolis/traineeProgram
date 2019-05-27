import React from "react";
import "./ListItem.css";

export const ListItem = props => {
  const { name, email, phone, website } = props.user;

  return (
    <div className={"itemContainer"}>
      <h3>{name}</h3>
      <hr />
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Phone: </strong>
        {phone}
      </p>
      <p>
        <strong>Website: </strong>
        {website}
      </p>
    </div>
  );
};
