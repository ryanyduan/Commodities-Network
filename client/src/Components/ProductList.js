import React, { Component } from "react";
import { Table, TableBody } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
  render() {
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

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
