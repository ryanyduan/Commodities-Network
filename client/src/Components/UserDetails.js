import React, { Component } from "react";
import { List, Label } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class UserDetails extends Component {
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
      <List className="userDetails" style={{ height: "400px" }}>
        {" "}
        <span id="title">User Details</span>
        <List.Item>
          {" "}
          <Label style={{ width: "90px" }}>Business ID:</Label> {businessID}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>Name:</Label> {name}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>Email:</Label> {email}{" "}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>Country:</Label> {country}{" "}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>Province:</Label> {province}{" "}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>City:</Label> {city}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>Address:</Label> {address}{" "}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>Postal Code:</Label> {postal_code}{" "}
        </List.Item>
        <List.Item>
          <Label style={{ width: "90px" }}>Phone Number: </Label>
          {phone_number}
        </List.Item>
      </List>
    );
  }
  render() {
    return <div>{this.getList()}</div>;
  }
}

UserDetails.propTypes = {
  details: PropTypes.object.isRequired
};
