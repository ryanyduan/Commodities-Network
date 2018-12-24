import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form style={{ width: "300px" }} onSubmit={this.props.func}>
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
    );
  }
}