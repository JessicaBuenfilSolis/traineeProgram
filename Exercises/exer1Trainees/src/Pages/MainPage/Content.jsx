import React from "react";
import "./Content.css";
import { BgImage } from "../../Components/BgImage/BgImage";
import { SimpleForm } from "../../Components/SimpleForm/SimpleForm";
import { List } from "../../Components/List/List";

const handleRender = props => {
  if (props.tab === "Home") return <BgImage />;
  if (props.tab === "Form") return <SimpleForm />;
  return <List />;
};

const ContentName = props => {
  return <div className={"contentContainer"}>{handleRender(props)}</div>;
};

export default ContentName;
