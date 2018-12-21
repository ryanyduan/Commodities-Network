import React, { Component } from "react";
import Config from "../config";
import Axios from "axios";
import {
  Button,
  Form,
  Header,
  Image,
  Label,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import "../styles.css";
import UserDetails from "./UserDetails";

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

  async getUserInfo() {
    let userInfo = {};
    const cURL = `${this.config.httpURL}/Business/${this.id}`;
    let response = await Axios.get(cURL);
    userInfo = response.data;
    this.setState({ userInfo: userInfo });
  }

  async handleSubmit(event) {
    event.preventDefault();

    let obj = {
      $class: "commoditiesnetwork.Product",
      productID: "02",
      product: event.target.product_type.value,
      weight: event.target.quantity.value,
      listingState: "NOT_FOR_SALE",
      owner: `commoditiesnetwork.Business#00`
    };

    let cURL = `${this.config.httpURL}/Product`;
    let reponse = await Axios.post(cURL, obj).catch(error =>
      console.log(error)
    );
  }

  render() {
    return (
      <div className="main">
        <Header as="h2" className="header">
          <Image
            id="header-img"
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          Ryan's Page
          <Label className="balance" color="blue">
            Balance: {this.state.userInfo.account_balance}
          </Label>
        </Header>
        <Segment>
          <Menu pointing secondary>
            <Menu.Item name="products">Products</Menu.Item>
            <Menu.Item name="auctions">Auctions</Menu.Item>
          </Menu>
        </Segment>

        <UserDetails details={this.state.userInfo} />

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
