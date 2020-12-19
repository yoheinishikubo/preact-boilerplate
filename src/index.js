import { useEffect, useState, useRef } from "preact/hooks";
import "./style";
import { Component } from "preact";
import { StoreContainer } from "./store";
import "bulma/css/bulma.min.css";

import Main from "./components/main";

export default class App extends Component {
  render() {
    return (
      <StoreContainer.Provider>
        <Main />
      </StoreContainer.Provider>
    );
  }
}