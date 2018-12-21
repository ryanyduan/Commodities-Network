import React, { Component } from "react";
import Config from "../config";
import Axios from "axios";
import { Button, Form } from "semantic-ui-react";

export default class RyanPage extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
    this.id = "00";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // data loading should be here, not constructor
    document.title = "Ryan Page";
    this.config = new Config();
    this.connection = new WebSocket(this.config.webSocketURL);
    this.getUserInfo();
  }

  componentWillUnmount() {
    this.connection.close();
  }

  getList() {
    return Object.entries(this.state.userInfo).map((entry, value) => (
      <li key={value}>
        {entry[0]} : {entry[1]}
      </li>
    ));
  }

  async getUserInfo() {
    let userInfo = {};
    const cURL = `${this.config.httpURL}/Business/${this.id}`;
    let response = await Axios.get(cURL);
    userInfo = response.data;
    this.setState({ userInfo: userInfo });
  }

  newProduct() {}

  async handleSubmit(event) {
    event.preventDefault();

    let obj = {
      $class: "commoditiesnetwork.Product",
      productID: "01",
      product: event.target.product_type.value,
      weight: event.target.quantity.value,
      listingState: "NOT_FOR_SALE",
      owner: `commoditiesnetwork.Business#00`
    };

    console.log(JSON.stringify(obj));

    let cURL = `${this.config.httpURL}/Product`;
    let reponse = await Axios.post(cURL, obj).catch(error =>
      console.log(error)
    );
  }

  render() {
    return (
      <div>
        Ryan's Page
        <div>Balance: {this.state.userInfo.account_balance}</div>
        <ul>
          User Details
          {this.getList()}
        </ul>
        <Form style={{ width: "300px" }} onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Product Type</label>
            <input placeholder="Product Type" name="product_type" />
          </Form.Field>
          <Form.Field>
            <label>Quantity</label>
            <input name="quantity" />
          </Form.Field>
          <Form.Field />
          <Button type="submit">Add Product</Button>
        </Form>
      </div>
    );
  }
}
