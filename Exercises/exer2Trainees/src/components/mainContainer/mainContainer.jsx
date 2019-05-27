import React, { Component } from "react";
import BigCard from "../bigCard/bigCarg";
import SearchBar from "../searchBar/search";
import List from "../list/list";
import Title from "../title/title";
import { getPlanets } from "../services/planets";
import "./mainContainer.css";

class mainContainer extends Component {
  state = {
    planets: null,
    selected: null,
    filtered: null
  };

  componentDidMount() {
    console.log("didMount");
    const planets = getPlanets();
    planets
      .then(result => {
        this.setState({ planets: result.results });
        this.setState({ filtered: result.results });
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  onListClick = planet => {
    const selected = planet;
    this.setState({ selected });
  };

  onSearch = event => {
    const filter = event.target.value.toUpperCase();
    const filtered = this.state.planets.filter(planet => {
      return planet.name.toUpperCase().indexOf(filter) > -1 ? planet : null;
    });
    this.setState({ filtered });
  };

  render() {
    const { filtered, selected } = this.state;
    return (
      <div className={"row"}>
        <div className={"col-xl-3 "} />
        <div className={"main_container col-xl-6 col-lg-12"}>
          <div className={"info_section "}>
            <BigCard planet={selected} />
          </div>
          <div className={"interactive_section"}>
            <Title planet={selected} />
            <SearchBar onSearch={this.onSearch} />
            <List elements={filtered} onListClick={this.onListClick} />
          </div>
        </div>
        <div className={"col-xl-3 "} />
      </div>
    );
  }
}

export default mainContainer;
