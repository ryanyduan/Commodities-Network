import React, { Component } from "react";
import "../styles.css";

import ContractList from "./ContractList";

export default class Contracts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ContractList />;
  }
}
