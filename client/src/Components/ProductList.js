import React, { Component } from "react";
import { Table, TableBody } from "semantic-ui-react";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.products === undefined) return null;

    const products = this.props.products.map((product, value) => (
      <Table.Row key={value}>
        <Table.Cell>CORN</Table.Cell>
        <Table.Cell>100</Table.Cell>
        <Table.Cell>Yesterday</Table.Cell>
      </Table.Row>
    ));

    return (
      <Table className="productList">
        <Table.Header>
          <Table.HeaderCell colSpan="3">Products</Table.HeaderCell>
        </Table.Header>
        <TableBody>{products}</TableBody>
      </Table>
    );
  }
}
