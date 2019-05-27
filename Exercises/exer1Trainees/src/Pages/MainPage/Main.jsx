import React, { Component } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import ContentName from "./Content";

//const [list, setList] = React.useState([
//  { text: "Home", id: 1, active: true },
//  { text: "List", id: 2, active: false },
//  { text: "Form", id: 3, active: false }
//]);

const list = [
  { text: "Home", id: 1, active: true },
  { text: "List", id: 2, active: false },
  { text: "Form", id: 3, active: false }
];

class Main extends Component {
  state = {
    navbar: {
      list
    },
    tab: "Home"
  };

  handleClick = id => () => {
    // esta función retorna una función
    const index = list.findIndex(item => item.id === id);
    const newList = [...list];
    newList[index].active = !list[index].active;
    //setList(newList);
    this.setState({
      navbar: {
        list: newList
      },
      tab: newList[index].text
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar navbar={this.state.navbar} onClick={this.handleClick} />
        <ContentName tab={this.state.tab} />
      </React.Fragment>
    );
  }
}

export default Main;

//export const Main = props => {
//  return <NavBar />;
//};
