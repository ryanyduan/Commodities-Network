import React, { Component } from "react";
import Config from "../config";
import Axios from "axios";
import {
  Button,
  Form,
  Header,
  Image,
  Label,
  Menu,
  Segment
} from "semantic-ui-react";
import "../styles.css";
import UserDetails from "./UserDetails";
import ProductList from "./ProductList";
import CreateContract from "./CreateContract";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";

export default class RyanPage extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
    this.id = "00";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContractSubmit = this.handleContractSubmit.bind(this);
    this.productID = 0;
    this.contractID = 0;
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
    const cURL = `${this.config.httpURL}/commoditiesnetwork.Business/${
      this.id
    }`;
    let response = await Axios.get(cURL);
    userInfo = response.data;
    this.setState({ userInfo: userInfo });
  }

  async handleSubmit(event) {
    event.preventDefault();

    let obj = {
      $class: "commoditiesnetwork.Product",
      productID: this.productID,
      product: event.target.product_type.value,
      weight: event.target.quantity.value,
      listingState: "NOT_FOR_SALE",
      owner: `commoditiesnetwork.Business#${this.id}`
    };

    let cURL = `${this.config.httpURL}/commoditiesnetwork.Product`;
    await Axios.post(cURL, obj).catch(error => console.log(error));

    this.productID++;

    let newCURL = `${this.config.httpURL}/commoditiesnetwork.NewProduct`;

    let newProduct = {
      $class: "commoditiesnetwork.NewProduct",
      product: `commoditiesnetwork.Product#${obj.productID}`,
      owner: `commoditiesnetwork.Business#${this.id}`
    };

    await Axios.post(newCURL, newProduct).catch(error => console.log(error));
  }

  async handleContractSubmit(event) {
    event.preventDefault();

    let obj = {
      $class: "commoditiesnetwork.Contract",
      contractID: this.contractID,
      startingPrice: event.target.startingPrice.value,
      product: event.target.product.value,
      grower: `commoditiesnetwork.Business#${this.id}`
    };

    let cURL = `${this.config.httpURL}/commoditiesnetwork.Contract`;

    await Axios.post(cURL, obj).catch(error => console.log(error));

    this.contractID++;
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

        <AddProduct func={this.handleSubmit} />
        <ProductList products={this.state.userInfo.products} />
        <CreateContract func={this.handleContractSubmit} />
      </div>
    );
  }
}
