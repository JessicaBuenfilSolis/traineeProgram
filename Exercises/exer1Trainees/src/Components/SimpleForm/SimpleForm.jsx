import React from "react";
import "./SimpleForm.css";

export class SimpleForm extends React.Component {
  state = {
    title: "",
    content: ""
  };

  /** create a function to handle the onChange event of the title */
  handleTitleOnChange = event => {
    this.setState({ title: event.target.value });
  };

  /** create a function to handle the onChange event of the content*/
  handleContentOnChange = event => {
    this.setState({ content: event.target.value });
  };

  render() {
    const { content } = this.state;
    return (
      <div className={"mainContainer"}>
        <div className={"formContainer"}>
          <form className={"form"}>
            <label htmlFor="title">
              <h2>Title:</h2>
            </label>
            {/* Create an input element of type text with an onChange event */}
            <input
              onChange={event => {
                this.handleTitleOnChange(event);
              }}
            />

            <label htmlFor="post">
              <h2>Content:</h2>
            </label>
            {/* Create an textarea element of with an onChange event */}
            <textarea
              onChange={event => {
                this.handleContentOnChange(event);
              }}
            />

            <hr />

            <label>
              <h2>Outcome:</h2>
            </label>
            <h1>
              {/**Print the state for title here if it's not empty else print [Title] */
              this.state.title ? this.state.title : "[Title]"}
            </h1>
            <p>
              {/**Print the state for contet here if it's not empty else print [Content] */
              content ? content : "[Content]"}
            </p>
          </form>
        </div>
      </div>
    );
  }
}
