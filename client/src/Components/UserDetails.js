import React, { Component } from "react";
import { List } from "semantic-ui-react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  getList() {
    const {
      businessID,
      name,
      email,
      country,
      province,
      city,
      address,
      postal_code,
      phone_number
    } = this.props.details;
    return (
      <List className="userDetails">
        {" "}
        <span id="title">User Details</span>
        <List.Item>Business ID: {businessID}</List.Item>
        <List.Item>Name: {name}</List.Item>
        <List.Item>Email: {email} </List.Item>
        <List.Item>Country: {country} </List.Item>
        <List.Item>Province: {province} </List.Item>
        <List.Item>City: {city}</List.Item>
        <List.Item>Address: {address} </List.Item>
        <List.Item>Postal Code: {postal_code} </List.Item>
        <List.Item>Phone Number: {phone_number}</List.Item>
      </List>
    );
  }
  render() {
    return <div>{this.getList()}</div>;
  }
}
