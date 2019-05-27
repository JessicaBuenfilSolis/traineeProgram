import React from "react";
import "./List.css";
import { ListItem } from "./ListItem/ListItem";

/**
   Use the life sycle componentDidMount and fetch an array of users from https://jsonplaceholder.typicode.com/users

   HINTS:
   https://reactjs.org/docs/react-component.html#componentdidmount
   https://developer.mozilla.org/en-US/docs/Web/API/Request
   https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   any kind of request should use async await
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
   */

/**
            Render the list of users here using the ListItem component.
            The ListItem component receives a prop called "user"
            HINT: https://reactjs.org/docs/lists-and-keys.html
            NOTE: As this part awaits for a response from a request, you need to render
            some kind of Loading text or a component, once the request is resolved
            it should print the list of users.
          */

export class List extends React.Component {
  state = {
    data: null
  };

  fetchUsers = async () => {
    let res = null;
    try {
      res = await fetch("https://jsonplaceholder.typicode.com/users");
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(res.json());
        }, 500);
      });
    } catch (error) {
      console.log("fetch error!", error);
      return null;
    }
  };

  /*console output: 
  render
  didMount
  render */

  componentDidMount() {
    console.log("didMount");
    this.fetchUsers().then(data => {
      this.setState({ data });
    });
  }

  render() {
    console.log("render");
    const { data } = this.state;
    return (
      <div className={"mainContainer"}>
        <div className={"listContainer"}>
          {data
            ? data.map(user => <ListItem user={user} key={user.id} />)
            : "Loading..."}
        </div>
      </div>
    );
  }
}
