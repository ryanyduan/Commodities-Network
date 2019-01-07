import React, { Component } from "react";
import Config from "../config";
import Axios from "axios";
import {
  Header,
  Image,
  Label,
  Menu,
  Segment,
  Grid,
  Button
} from "semantic-ui-react";
import "../styles.css";
import UserDetails from "./UserDetails";
import ProductList from "./ProductList";
import CreateContract from "./CreateContract";
import { NavLink } from "react-router-dom";
import AddProduct from "./AddProduct";

export default class RyanPage extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {}, products: [] };
    this.id = "00";
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContractSubmit = this.handleContractSubmit.bind(this);
    this.getHistorian = this.getHistorian.bind(this);
    this.productID = 0;
    this.contractID = 0;
  }

  async componentDidMount() {
    // data loading should be here, not constructor
    document.title = "Ryan Page";
    this.config = new Config();
    this.connection = new WebSocket(this.config.webSocketURL);
    this.getUserInfo();
    let cURL = `${this.config.httpURL}/system/historian`;
    this.historian = await Axios.get(cURL);
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

  async getHistorian(event) {
    console.log("historian clicked");
    event.preventDefault();

    let cURL = `${this.config.httpURL}/commoditiesnetwork.Business#${this.id}`;
    let response = await Axios.get(cURL);
    const responseProducts = response.data[parseInt(this.id)].products;

    let products = new Set();
    for (let items of responseProducts) {
      products.add(items.substr(-1));
    }

    this.setState({ products });
    console.log(this.state.products);
  }

  render() {
    return (
      <div>
        <Header as="h2" className="header">
          <Image
            id="header-img"
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          Ryan's Page
          <Label
            className="balance"
            color="blue"
            style={{ position: "absolute" }}
          >
            Balance: {this.state.userInfo.account_balance}
          </Label>
        </Header>
        <Segment style={{ backgroundColor: "lightgray" }}>
          <Menu pointing secondary>
            <Menu.Item name="products">Products</Menu.Item>
            <Menu.Item name="auctions">
              <NavLink to="/Contracts" exact>
                Auctions
              </NavLink>
            </Menu.Item>
          </Menu>
        </Segment>
        <div className="main">
          <Grid columns={3} relaxed="very">
            <Grid.Column>
              <AddProduct func={this.handleSubmit} />
            </Grid.Column>
            <Grid.Column>
              <CreateContract func={this.handleContractSubmit} />
            </Grid.Column>
            <Grid.Column>
              <UserDetails details={this.state.userInfo} />
            </Grid.Column>
          </Grid>
          <Button onClick={this.getHistorian}>Historian</Button>

          {/* <ProductList products={this.state.userInfo.products} /> */}
        </div>
      </div>
    );
  }
}
